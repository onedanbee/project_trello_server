const jwt = require("jsonwebtoken");
var express = require("express");
const jwtKey = require("../secret/jwtKey");
var router = express.Router();

router.use((req, res, next) => {
  let token = req.headers.token;
  let salt = jwtKey.key;
  if (token) {
    jwt.verify(token, salt, (err, token) => {
      if (err) res.json(err);
      req.token = token;
      next();
    });
  } else {
    next();
  }
});

module.exports = router;
