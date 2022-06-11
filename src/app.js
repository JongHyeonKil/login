// 모듈
const express = require("express");
const app = express();

const PORT = 3000;

// 라우팅
const home = require("./routes/home");

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

// 미들웨어 등록 use
app.use("/", home);

module.exports = app;