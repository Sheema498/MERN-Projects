// Generate Token :

const jwt = require("jsonwebtoken");
const login = (req, res) => {
    const { usename, password } = req.body;

    if (
        usename === "admin" &&
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
    res.status(401).json({
        message: "invalid credentialas"
    });
};

module.exports = {
    login
};