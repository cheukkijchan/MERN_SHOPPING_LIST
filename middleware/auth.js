const config = require("config");
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  // save request header as token
  const token = req.header("x-auth-token");

  // Check for token
  if (!token) res.status(401).json({ msg: "no token, authorization denied" });

  try {
    // Verify Token
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    // Add user from payload (decoded is payload carried by the token)
    req.user = decoded;

    // Call next middleware
    next();
  } catch (e) {
    res.status(400).json({ msg: "Token is not valid" });
  }
}

module.exports = auth;
