const { ServerError } = require("../errors");
const express = require("express");
const router = express.Router();
module.exports = router;

const prisma = require("../prisma");

router.get("/", async (req, res, next) => {
  try {
    const resolutionData = await prisma.resolutions.findMany();
    console.log(resolutionData);
    res.json(resolutionData);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const resolution = await prisma.resolutions.findUnique({
      where: { id },
    });
    res.json(resolution);
    console.log("find resolution ===", resolutions);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { resname, email } = req.body;

    if (!resname || !email) {
      throw new ServerError(400, "Missing required fields");
    }

    const resolution = await prisma.resolutions.create({
      data: {
        resname, 
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

    await prisma.resolutions.delete({ where: { id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const id = + req.params.id;
    const { resname, email } = req.body;

    const resolution = await prisma.resolutions.findUnique({ where: { id } }); // Corrected here
    const updatedResolution = await prisma.resolutions.update({
      where: { id },
      data: {
        resname,
        email,
      },
    });
    res.json(updatedResolution);
  } catch (err) {
    next(err);
  }
});
