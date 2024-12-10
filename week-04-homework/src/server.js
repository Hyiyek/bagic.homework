import express from "express";
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

//선수 데이터생성
const players = [
  {
    name: "차범근",
    speed: 100,
    grade: "sss",
    name: "박지성",
    speed: 100,
    grade: "sss",
    name: "이천수",
    speed: 100,
    grade: "sss",
  },
];

app.get("/", (req, res) => {
  res.send("홈페이지");
});

app.listen(port, () => {
  console.log(`http://localhost ${port}`);
});
