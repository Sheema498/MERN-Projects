// Create Login Route

const express = require("express");
const router = express.Router();

const {
    login
} = require("../controllers/authController");

//Protected Route
router.post(
     "/login",
     login
);
module.exports = router;