const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {

  const token = req.header("token");

  if (!token) {
    return res.status(401).json({
      message: "No Token"
    });
  }

  try {

    const decoded = jwt.verify(
      token,
      "studentprojectsecret"
    );

    req.user = decoded;

    next();

  } catch (error) {

    res.status(401).json({
      message: "Invalid Token"
    });

  }
};

module.exports = auth;