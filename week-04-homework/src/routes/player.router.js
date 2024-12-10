// 선수 불러오기 - Read
// 불러 오니까 메서드 Get
// 맨 앞에 /api -> 백엔드하태 데이터요청
const router = express();

router.get("/api/players", (req, res) => {
  res.json(players);
});

router.post("/api/players", (req, res) => {
  console.log("req.body", req.body);

  const { name, speed, grade } = req.body;
  players.push({ name, speed, grade });

  res.json(players);
});
router.delete("/api/players/:name", (req, res) => {
  const { name } = req.params;
  const _players = players.filter((player) => {
    return player.name !== name;
  });
  res.json(players);
});

router.patch("/api/players", (req, res) => {
  const { name } = req.params;
  const _players = players.filter((player) => {
    return player.name !== name;
  });
  if (speed) {
    speed = req.speed;
  }
  if (grade) {
    grade = req.grade;
  }
});
