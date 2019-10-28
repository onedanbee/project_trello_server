const models = require("./models/index.js");
const express = require("express");
const router = require("./router.js");
const parser = require("body-parser");

models.sequelize
  .sync()
  .then(() => {
    console.log("DB 연결 성공");
  })
  .catch(err => {
    console.log("연결 실패");
    console.log(err);
  });

app.use(parser.json());
app.use("/", router);
module.exports.app = app;
