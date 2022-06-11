// 모듈
const express = require("express");
const app = express();

const PORT = 3000;

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

// 미들웨어 등록 use
app.use("/", home);
app.use(express.static(`${__dirname}/src/public`));

module.exports = app;