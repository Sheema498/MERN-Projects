const express = require("express");
const cors = require("cors")

const authRoutes = require("./routes/authRoutes");
const verifyToken = require("./middleware/authMiddleware");

const app = express();


//implementation of middleware
app.use(cors());
app.use(express.json());

//Home Routes
app.get("/", (req, res) => {
    res.send("JWT Authentication server is running.");
});

//Authentication Routes
app.use("/api/route",authRoutes);

//Protected Route
app.get("/profile", verifyToken, (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to protected Route.",
        user: req.user
    });
});

//Another Protected Route example

app.get("/dashboard", verifyToken, (req, res) => {
    res.status(200).json({
        success: true,
        message: "Dashboard Access Granted.",
        user: req.user
    });
});

// Invalid route Handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found."
    });
});

const Port = 5000;
app.listen(Port, () => {
    console.log(`Server is running on http://localhost:${Port}`);
});