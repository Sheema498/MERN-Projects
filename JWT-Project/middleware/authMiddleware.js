// Create Middleware
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.header("Authorization") || req.header("authorization");
    const tokenHeader = authHeader || req.header("x-access-token") || req.header("token");
    const tokenFromBody = req.body && req.body.token;
    const tokenFromQuery = req.query && req.query.token;
    const rawToken = tokenHeader || tokenFromBody || tokenFromQuery;
    const token = rawToken && rawToken.startsWith("Bearer ")
        ? rawToken.slice(7)
        : rawToken;

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "No token provided"
        });
    }
    try {
        const decoded = jwt.verify(
            token,
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzgwODQwMjcxLCJleHAiOjE3ODA4NDM4NzF9.5YEcMYcFg98omYL_2wuWKb7Zpyd47hJDcOkkDVxheNo"
        );
        req.user = decoded;
        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Invalid token.'
        });
    }
};

module.exports = verifyToken;