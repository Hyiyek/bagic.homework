import { PrismaClient } from "@prisma/client";
import { group } from "console";

const prisma = new PrismaClient();

const getPlayers = async (req, res) => {
  const players = await prisma.player.findMany();
  res.json(players);
};

const createPlayer = async (req, res) => {
  const { name, speed, grade } = req.body;

  const player = await prisma.player.create({
    data: { name, speed, grade },
  });

  res.json(player);
};
const updatePlayer = async (req, res) => {
  const { name } = req.params;
  const { speed, grade } = req.body;

  const player = await prisma.player.update({
    where: { name },
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

export { getPlayers, createPlayer, deletePlayer, updatePlayer };
