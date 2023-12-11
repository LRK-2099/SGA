const { ServerError } = require("../errors");
const express = require("express");
const router = express.Router();
module.exports = router;

const prisma = require("../prisma");

router.get("/", async (req, res, next) => {
  try {
    const resolutionData = await prisma.resolution.findMany();
    console.log(resolutionData);
    res.json(resolutionData);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const resolutionById = await prisma.resolution.findUnique({
      where: { id },
    });
    if (!resolutionById) {
      return next({
        status: 404,
        message: `No resolution found with id ${id}`,
      });
    }
    res.json(resolutionById);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { ResName, email } = req.body;

    if (!ResName || !email) {
      throw new ServerError(400, "Missing required fields");
    }

    const resolution = await prisma.resolution.create({
      data: {
        ResName, 
        email,
      },
    });
    res.json(resolution);
  } catch (err) {
    next(err);
  }
});

// delete
router.delete("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    await prisma.resolution.delete({ where: { id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const { ResName, email } = req.body;

    const resolution = await prisma.resolutions.findUnique({ where: { id } });
    const updatedResolution = await prisma.resolution.update({
      where: { id },
      data: {
        ResName,
        email,
      },
    });
    res.json(updatedResolution);
  } catch (err) {
    next(err);
  }
});
