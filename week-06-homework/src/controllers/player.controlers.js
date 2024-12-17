import { PrismaClient } from "@prisma/client";
import { group } from "console";

const prisma = new PrismaClient();

const getPlayers = async (req, res) => {
  const players = await prisma.player.findMany();
  return res.status(200).json(players);
};

const createPlayer = async (req, res) => {
  const { name, speed, grade } = req.body;

  const player = await prisma.player.create({
    data: { name, speed, grade },
  });

  return res.status(201).json({ message: "생성이 완료되었습니다" });
};
const updatePlayer = async (req, res) => {
  const { playerId } = req.params;
  const { speed, grade } = req.body;

  const foundPlayer = await prisma.player.findUnique({
    where: {
      id: playerId,
    },
  });
  if (!foundPlayer)
    return res.status(404).json({ message: "존재하지않는 플레이어입니다" });

  const player = await prisma.player.update({
    where: { playerId },
    data: {
      speed,
      grade,
    },
  });

  res.json(player);
};

const deletePlayer = async (req, res) => {
  const { name } = req.params;

  const player = await prisma.player.delete({
    where: { name },
  });

  res.json(player);
};

export { getPlayers, createPlayer, deletePlayer, updatePlayer, prisma };
