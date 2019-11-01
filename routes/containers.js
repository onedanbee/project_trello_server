const express = require("express");
const router = express.Router();
const containers = require("../models").container;
const boards = require("../models").board;

router.post("/", async (req, res) => {
  console.log(req.body);
  if (req.token) {
    containers
      .create({
        c_title: req.body.c_title,
        B_key: req.body.B_key
      })
      .then(val => {
        containers;
        res.json({
          message: "containers 생성이 되었습니다.👻",
          C_key: val.dataValues.C_key
        });
      });
  } else {
    res.json({ message: "실패했습니다" });
  }
});

router.delete("/:C_key", async (req, res) => {
  let result = {};
  if (req.token) {
    containers
      .destroy({
        where: {
          c_title: req.body.c_title,
          C_key: req.params.C_key
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

router.put("/:c_key", async (req, res) => {
  if (req.token) {
    await containers
      .findOne({
        where: {
          c_key: req.params.c_key
        }
      })
      .then(users => {
        users
          .update({ c_title: req.body.c_title })
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

router.get("/:B_key", async (req, res) => {
  containers
    .findAll({
      where: {
        B_key: req.params.B_key
      }
    })
    .then(result => {
      res.json(result);
    })
    .catch(err => res.json(err));
});
module.exports = router;
