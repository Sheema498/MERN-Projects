const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const verifyToken = require("./middleware/authMiddleware");

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//Home Routes    http://localhost:5000/
app.get("/", (req, res) => {
    res.send("JWT Authentication server is 🏃‍♀️‍➡️");
});

//Authentication Route
app.use("/api/auth", authRoutes);

//Protected Routes
app.get("/profile", verifyToken, (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcomoe to protected Route",
        user: req.user
    });
});

// Another Protected Route Example
app.get("/dashboard", verifyToken, (req, res) => {
    res.status(200).json({
        success: true,
        message: "Dashboard Access Granted",
        user: req.user
    });
});

// invalid route Handler
app.use((req,res)=> {
    res.status(404).json({
        success: false,
        message: "Route Not Found",  
    });
});
const PORT = 5000;
app.listen(PORT,() => {
    console.log(`server is running on http://localhost:${PORT}`);
});