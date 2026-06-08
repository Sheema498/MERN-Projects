const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();


// Register

router.post("/register", async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.json({
                message: "User Already Exists"
            });
        }

        const hashedPassword = await bcrypt.hash(
            password,
            10
        );

        const user = new User({
            name,
            email,
            password: hashedPassword
        });

        await user.save();

        res.json({
            message: "User Registered Successfully"
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });
    }
});


// Login

router.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({
            email
        });

        if (!user) {

            return res.status(400).json({
                message: "User Not Found"
            });
        }

        const validPassword =
            await bcrypt.compare(
                password,
                user.password
            );

        if (!validPassword) {

            return res.status(400).json({
                message: "Invalid Password"
            });
        }

        const token = jwt.sign(
            { id: user._id },
            "mysecretkey"
        );

        res.json({
            token
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });
    }
});

module.exports = router;