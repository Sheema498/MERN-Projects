const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();


// REGISTER

router.post("/register", async (req, res) => {

  try {

    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({
      email
    });

    if (existingUser) {
      return res.json({
        message: "Email Already Exists"
      });
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role
    });

    await user.save();

    res.json({
      message: "Registration Successful"
    });

  } catch (error) {

    res.status(500).json(error);

  }

});


// LOGIN

router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({
      email
    });

    if (!user) {

      return res.json({
        message: "User Not Found"
      });

    }

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {

      return res.json({
        message: "Invalid Password"
      });

    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role
      },
      "studentprojectsecret",
      {
        expiresIn: "1d"
      }
    );

    res.json({
      token,
      role: user.role,
      name: user.name
    });

  } catch (error) {

    res.status(500).json(error);

  }

});

module.exports = router;