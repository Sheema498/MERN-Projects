// create middleware
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json(
            {
                message: "No tokens."
            }
        );
    }

    try {
        const decoded = jwt.verify(
            token,
            "mysecretKey" 
        );
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(400).json(
            {
                message: "Invalid token."
            }
        );
    };
};

module.exports = verifyToken;