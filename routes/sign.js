const express = require("express");
const router = express.Router();
const users = require("../models").user;
var crypto = require("crypto");
const jwtKey = require("../secret/jwtKey");

const jwt = require("jsonwebtoken");

router.post("/signin", (req, res) => {
  console.log(req.params);
  let token = jwt.sign(
    {
      user_email: req.body.user_email
    },
    jwtKey.key,
    {
      expiresIn: "24h"
    }
  );

  users
    .findOne({
      where: {
        user_email: req.body.user_email
      }
    })
    .then(users => {
      crypto.pbkdf2(
        req.body.user_password,
        users.dataValues.salt,
        199543,
        64,
        "sha512",
        (err, salt) => {
          if (salt.toString("base64") === users.dataValues.user_password) {
            res.cookie("users", token);
            res.json({
              token: token,
              isLogin: true,
              message: "로그인 성공!!!"
            });
          }
        }
      );
    });
});

router.delete("/:U_key", async (req, res) => {
  let result = {};
  if (req.token) {
    users
      .destroy({
        where: {
          user_email: req.token.user_email
        }
      })
      .then(() => {
        result.isUserDeleted = true;
        res.json(result);
      })
      .catch(err => res.json(err));
  } else {
    res.sendStatus(401);
  }
});

router.put("/:U_key", async (req, res) => {
  users
    .findOne({
      where: {
        user_email: req.body.user_email
      }
    })
    .then(users => {
      crypto.pbkdf2(
        req.body.user_password,
        users.dataValues.salt,
        199543,
        64,
        "sha512",
        (err, key) => {
          users
            .update(
              { user_password: key.toString("base64") },
              { where: { user_id: req.body.user_id } }
            )
            .then(result => {
              res.json({ result: result, message: "수정완료✔️" });
            })
            .catch(err => {
              console.log(err);
            });
        }
      );
    });
});

module.exports = router;
