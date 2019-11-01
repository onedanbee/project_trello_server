// const session = require("express-session");
const express = require("express");
const parser = require("body-parser");
const models = require("./models/index");

const app = express();

const users = require("./routes/users");
const sign = require("./routes/sign");
const auth = require("./middlewares/auth");
const boards = require("./routes/boards");
const containers = require("./routes/containers");

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
app.use(parser.urlencoded({ extended: true }));
app.use(auth);
app.use("/users", users);
app.use("/sign", sign);
app.use("/boards", boards);
app.use("/containers", containers);

app.get("/", (req, res) => {
  res.send("express.js로 만든 서버입니다.");
});

app.listen(3000, () => {
  console.log("**********서버연결 성공*********");
});
