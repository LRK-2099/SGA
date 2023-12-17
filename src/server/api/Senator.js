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
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const senator = await prisma.senator.findUnique({
      where: { id },
    });
    res.json(senator);
    console.log("find senator ===", senator);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { firstName, lastName, email, imageUrl, major } = req.body;

    if (!firstName) {
      throw new ServerError(400, "Missing first name");
    }
    if (!lastName) {
      throw new ServerError(400, "Missing last name");
    }
    if (!imageUrl) {
      throw new ServerError(400, "Image not found");
    }
    if (!email) {
      throw new ServerError(400, "Invalid email");
    }
    if (!major) {
      throw new ServerError(400, "Major not found");
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

    await prisma.senator.delete({ where: { id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

// ...rest of your routes