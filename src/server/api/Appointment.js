const { ServerError } = require("../errors");
const express = require("express");
const router = express.Router();
module.exports = router;

const prisma = require("../prisma");

router.get("/", async (req, res, next) => {
  try {
    const appointmentData = await prisma.appointment.findMany();
    console.log(appointmentData);
    res.json(appointmentData);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const appointment = await prisma.appointment.findUnique({
      where: { id },
    });
    res.json(appointment);
    console.log("find appointment ===", appointment);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { date, timeSlot, email, phoneNumber } = req.body;

    if (!date) {
      throw new ServerError(400, "Missing date");
    }
    if (!timeSlot) {
      throw new ServerError(400, "Missing timeSlot");
    }
    if (!email) {
      throw new ServerError(400, "Invalid email");
    }
    if (!phoneNumber) {
      throw new ServerError(400, "Invalid phone number");
    }

    const appointment = await prisma.appointment.create({
      data: {
        date,
        timeSlot,
        email,
        phoneNumber,
      },
    });
    res.json(appointment);
  } catch (err) {
    next(err);
  }
});

//delete
router.delete("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    await prisma.appointment.delete({ where: { id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

// ...rest of your routes
