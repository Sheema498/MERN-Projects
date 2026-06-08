// Generate Token 
const jwt = require("jsonwebtoken");
const login = (req, res) => {
    const { username, password } = req.body;

    if (
        username === "admin" &&
        password === "123"
    ) {
        const token = jwt.sign(
            {
                username
            },
            "mysecretkey",
            {
                expiresIn: "1h"
            }
        );
        return res.json({
            token
        });
    }
    res.status(404).json({
        message:"Invalid Credentials"
    });
};

module.exports = {
    login
};