// Create Login Route

const express = require("express");
const router = express.Router();

const authRoutes = require("./")
const {
    login
} = require("../controllers/authController");


//Authentication route
app.use("/api/auth",authRoutes)
//Protected Route

router.post(
     "/login",
     login
);
module.exports = router;