// routes/players.js
const express = require("express");
const router = express.Router();

// 모든 선수 목록 조회
router.get("/", (req, res) => {
  res.json(players);
});

// 특정 선수 조회
router.get("/:name", (req, res) => {
  const player = players.find((player) => player.name === req.params.name);
  if (player) {
    res.json(player);
  } else {
    res.status(404).send("선수를 찾을 수 없습니다.");
  }
});

// 선수 추가
router.post("/", (req, res) => {
  const newPlayer = req.body;
  players.push(newPlayer);
  res.status(201).json(newPlayer);
});

// 선수 삭제
router.delete("/:name", (req, res) => {
  const playerIndex = players.findIndex(
    (player) => player.name === req.params.name
  );
  if (playerIndex !== -1) {
    players.splice(playerIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send("선수를 찾을 수 없습니다.");
  }
});
