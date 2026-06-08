
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(5000, () => {
    console.log("Server Running");
});

// login Request (post)  
// http://localhost:5000/api/auth/login

// body
// {
//     "username":"admin",
//     "password":"123"
// }


