const express = require("express");
const router = express.Router();
var crypto = require("crypto");

const users = require("../models").user;

router.post("/signUp", async (req, res) => {
  const joinUser = await users
    .findOne({ where: { user_id: req.body.user_id } })
    .then(result => result);

  let response = {};
  if (!joinUser) {
    crypto.randomBytes(64, (err, buf) => {
      crypto.pbkdf2(
        req.body.user_password,
        buf.toString("base64"),
        199543,
        64,
        "sha512",
        (err, key) => {
          users
            .create({
              user_id: req.body.user_id,
              user_email: req.body.user_email,
              user_password: key.toString("base64"),
              salt: buf.toString("base64")
            })
            .then(() => {
              users;
              response.isSignup = true;
              res.json(response);
            });
        }
      );
    });
  } else {
    response.isSignup = false;
    res.json(response);
  }
});

module.exports = router;
