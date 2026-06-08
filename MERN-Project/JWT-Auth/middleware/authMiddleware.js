// Create Middleware

const jwt = require("jsonwebtoken");

const veryfyToken = (res, req, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({
            message: "No token"
        });
    }
    try {
        const decoded = jwt.verify(
            token, "mysecretkey"
        );
        req.user = decoded;
        next();
    }
    catch (error) {
        return res.status(401).json({
            message: "Invalid token"
        });
    }
};

module.exports = veryfyToken;