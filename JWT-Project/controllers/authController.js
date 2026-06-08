// Generate Token :

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
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzgwODQwMjcxLCJleHAiOjE3ODA4NDM4NzF9.5YEcMYcFg98omYL_2wuWKb7Zpyd47hJDcOkkDVxheNo",
            {
                expiresIn: "1h"
            }
        );
        return res.status(200).json({
            success: true,
            token
        });
    }
    res.status(401).json({
        success: false,
        message: "Invalid credentials"
    });
};

module.exports = {
    login
};


