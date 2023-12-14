const { ServerError } = require("../errors");
const express = require("express");
const router = express.Router();
module.exports = router;

const prisma = require("../prisma");

// Retrieve all appointments
router.get("/", async (req, res, next) => {
  try {
    // Fetch all appointments from the database
    const appointmentData = await prisma.appointment.findMany();
    
    // Log appointment data
    console.log(appointmentData);
    
    // Respond with appointment data
    res.json(appointmentData);
  } catch (error) {
    // Handle errors
    next();
  }
});

// Retrieve appointment by ID
router.get("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    // Find appointment by ID
    const appointmentById = await prisma.appointment.findUnique({ where: { id } });

    // Check if the appointment exists
    if (!appointmentById) {
      // If not found, return a 404 response
      return next({
        status: 404,
        message: `No appointment found with ID ${id}`,
      });
    }

    // Respond with the appointment data
    res.json(appointmentById);
  } catch {
    // Handle errors
    next();
  }
});

// Create a new appointment
router.post("/", async (req, res, next) => {
  try {
    const { firstName, lastName, email, imageUrl, major } = req.body;

    // Validate request data
    if (!firstName || !lastName || !imageUrl || !email || !major) {
      throw new ServerError(400, "Missing required fields");
    }

    // Create a new appointment in the database
    const appointment = await prisma.appointment.create({
      data: {
        firstName,
        lastName,
        email,
        imageUrl,
        major,
      },
    });

    // Respond with the newly created appointment
    res.json(appointment);
  } catch (err) {
    // Handle errors
    next(err);
  }
});

// Delete an appointment by ID
router.delete("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    // Find the appointment by ID
    const appointment = await prisma.appointment.findUnique({ where: { id } });

    // If the appointment is found, delete it
    if (appointment) {
      await prisma.appointment.delete({ where: { id } });
      res.sendStatus(204); // Send a success (No Content) response
    } else {
      // If appointment not found, return a 404 response
      return next({
        status: 404,
        message: `No appointment found with ID ${id}`,
      });
    }
  } catch (err) {
    // Handle errors
    next(err);
  }
});

// Update an appointment by ID
router.put("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const { firstName, lastName, email, imageUrl, major } = req.body;

    // Find the appointment by ID
    const appointment = await prisma.appointment.findUnique({ where: { id } });

    // If the appointment is found, update it
    if (appointment) {
      const updatedAppointment = await prisma.appointment.update({
        where: { id },
        data: { firstName, lastName, email, imageUrl, major },
      });

      // Respond with the updated appointment
      res.json(updatedAppointment);
    } else {
      // If appointment not found, return a 404 response
      return next({
        status: 404,
        message: `No appointment found with ID ${id}`,
      });
    }
  } catch (err) {
    // Handle errors
    next(err);
  }
});
