const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

//  데이터베이스
let players = [
  { id: 1, name: "차범근", speed: 100, shouting: 100, grade: "s" },
  { id: 2, name: "메시", speed: 100, shouting: 100, grade: "s" },
  { id: 3, name: "호날두", speed: 100, shouting: 100, grade: "s" },
];

// 플레이어 목록 조회 (GET /players)
app.get("/players", (req, res) => {
  res.json(players);
});

// 플레이어 추가 (POST /players)
app.post("/players", (req, res) => {
  const newPlayer = {
    id: players.length + 1,
    name: req.body.name,
    speed: req.body.speed,
    shouting: req.body.shouting,
    grade: req.body.grade,
  };
  players.push(newPlayer);
  res.status(201).json(newPlayer);
});

// 플레이어 수정 (PUT /players/:id)
app.get("/players/:id", (req, res) => {
  const playerId = parseInt(req.params.id);
  const playerIndex = players.findIndex((player) => player.id === playerId);

  if (!playerIndex) {
    return res.status(404).json({ message: "플레이어를 찾을수없습니다" });
  }

  players[playerIndex] = {
    id: playerId,
    name: req.body.name,
    speed: req.body.speed,
    shouting: req.body.shouting,
    grade: req.body.grade,
  };

  res.json(players[playerIndex]);
});

// 플레이어 삭제 (DELETE /players/:id)
app.delete("/players/:id", (req, res) => {
  const playerId = parseInt(req.params.id);
  const playerIndex = players.findIndex((player) => player.id === playerId);

  if (!playerIndex) {
    return res.status(404).json({ message: "플레이어를 찾을수없습니다" });
  }

  players.splice(playerIndex, 1);
  res.status(204).send();
});
