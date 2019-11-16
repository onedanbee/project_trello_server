const express = require("express");
const router = express.Router();
const cards = require("../models").card;
const containers = require("../models").container;

router.post("/", async (req, res) => {
  console.log(req.body);
  if (req.token) {
    cards
      .create({
        card_text: req.body.card_text,
        C_key: req.body.C_key
      })
      .then(val => {
        containers;
        res.json({
          message: "card가 생성이 되었습니다.👻",
          C_key: val.dataValues.C_key
        });
      });
  } else {
    res.json({ message: "실패했습니다" });
  }
});

router.delete("/:card_key", async (req, res) => {
  let result = {};
  if (req.token) {
    cards
      .destroy({
        where: {
          card_key: req.params.card_key
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

router.put("/:card_key", async (req, res) => {
  if (req.token) {
    await cards
      .findOne({
        where: {
          card_key: req.params.card_key
        }
      })
      .then(users => {
        users
          .update({ card_text: req.body.card_text })
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

router.put("/:card_key/move", async (req, res) => {
  if (req.token) {
    await cards
      .findOne({
        where: {
          card_key: req.params.card_key
        }
      })
      .then(card => {
        card
          .update({ C_key: req.body.C_key })
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

router.get("/:C_key", async (req, res) => {
  cards
    .findAll({
      where: {
        C_key: req.params.C_key
      }
    })
    .then(result => {
      res.json(result);
    })
    .catch(err => res.json(err));
});

module.exports = router;
