const express = require("express");
const router = express.Router();
const containers = require("../models").container;
const cards = require("../models").card;

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

router.put("/:C_key", async (req, res) => {
  if (req.token) {
    await containers
      .findOne({
        where: {
          C_key: req.params.C_key
        }
      })
      .then(container => {
        container
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
      include: [
        {
          model: cards,
          attributes: ["card_text", "card_key"]
        }
      ],
      where: {
        B_key: req.params.B_key
      }
    })
    .then(result => {
      res.json(result);
    })
    .catch(err => res.json(err));
});

router.get("/:B_key/list", async (req, res) => {
  containers
    .findAll({
      where: {
        B_key: req.params.B_key
      },
      attributes: ["C_key", "c_title"]
    })
    .then(result => {
      res.json(result);
    })
    .catch(err => res.json(err));
});

module.exports = router;
