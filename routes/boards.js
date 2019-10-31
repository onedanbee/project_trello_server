const express = require("express");
const router = express.Router();
const boards = require("../models").board;
const users = require("../models").user;

router.post("/create", async (req, res) => {
  console.log("req를 보여주세요", req.token);

  let user_key = await users
    .findOne({
      where: {
        user_email: req.token.user_email
      },
      attributes: ["U_key"]
    })
    .then(val => val.dataValues.U_key);

  if (req.token) {
    boards
      .create({
        b_title: req.body.b_title,
        U_key: user_key
      })
      .then(() => {
        boards;
        res.json({ message: "board 생성이 되었습니다.👻" });
      });
  } else {
    res.json({ message: "실패" });
  }
});

router.post("/delete", async (req, res) => {
  let result = {};
  if (req.token) {
    boards
      .destroy({
        where: {
          b_title: req.body.b_title
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

router.post("/modify", async (req, res) => {
  if (req.token) {
    await boards
      .findOne({
        where: {
          B_key: req.body.B_key
        }
      })
      .then(users => {
        users
          .update({ b_title: req.body.b_title })
          .then(result => {
            res.json({ result: result, message: "수정완료✔️" });
          })
          .catch(err => {
            console.log(err);
          });
      });
  } else {
    res.sendStatus(401);
  }
});

module.exports = router;
