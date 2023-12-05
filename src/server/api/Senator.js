const { ServerError } = require("../errors");
const express = require("express");
const router = express.Router();
module.exports = router;

const prisma = require("../prisma");

router.get("/", async (req, res, next) => {
  try {
    const senatorData = await prisma.senator.findMany();
    console.log(senatorData);
    res.json(senatorData);
  } catch {
    next();
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const senatorbyId = await prisma.senator.findUnique({ where: { id } });
    if (!senatorbyId) {
      return next({
        status: 404,
        message: `no senators here ${id}`,
      });
    }
    res.json(senatorbyId);
  } catch {
    next();
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { firstName, lastName, email, imageUrl, major } = req.body;

    if (!firstName) {
      throw new ServerError(400, "missing first name");
    }
    if (!lastName) {
      throw new ServerError(400, "lastname");
    }
    if (!imageUrl) {
      throw new ServerError(400, "image not found");
    }
    if (!email) {
      throw new ServerError(400, "invalid Email");
    }
    if (!major) {
      throw new ServerError(400, "major not found");
    }

    const senator = await prisma.senator.create({
      data: {
        firstName,
        lastName,
        email,
        imageUrl,
        major,
      },
    });
    res.json(senator);
  } catch (err) {
    next(err);
  }
});

//delete
router.delete("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const senator = await prisma.senator.findUnique({ where: { id } });

    await prisma.senator.delete({ where: { id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const { firstName, lastName, email, imageUrl, major } = req.body;

    const senator = await prisma.senator.findUnique({ where: { id } });

    const updatedsenator = await prisma.senator.update({
      where: { id },
      data: { firstName, lastName, email, imageUrl, major },
    });
    res.json(updatedsenator);
  } catch (err) {
    next(err);
  }
});
