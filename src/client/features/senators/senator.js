const express = require('express');
const router = express.Router();
module.exports = router;

const prisma = require('../prisma');

// should be: /api/senators
router.get('/', async (req, res, next) => {
  try {
    const senatorData = await prisma.senator.findMany();
    console.log(senatorData);
    res.json(senatorData);
  } catch {
    next();
  }
});

// displays senator by id
router.get('/:id', async (req, res, next) => {
  try {
    // grabs the id from senator database
    const id = +req.params.id;

    const senatorById = await prisma.senator.findUnique({ where: { id } });
    if (!senatorById) {
      return next({
        status: 404,
        message: `These are not the id's you are looking for... That non-existent id is ${id}`,
      });
    }
    res.json(senatorById);
  } catch {
    next();
  }
});

// add a senator
router.post('/', async (req, res, next) => {
  try {
    const { firstName, lastName, email, imageUrl, major } = req.body;
    if (!firstName) {
      throw new ServerError(400, "First name Required.");
    }
    if (!lastName) {
      throw new ServerError(400, "Last name Required.");
    }
    if (!email) {
      throw new ServerError(400, "email Required.");
    }
    if (!imageUrl) {
      throw new ServerError(400, "Image address Required.");
    }
    if (!gpa) {
      throw new ServerError(400, "major Required.");
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

// delete a senator by id
router.delete('/:id', async (req, res, next) => {
  try {
    const id = +req.params.id;

    const senator = await prisma.senator.findUnique({ where: { id } });

    await prisma.senator.delete({ where: { id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});


router.put('/:id', async (req, res, next) => {
  try {
    const id = +req.params.id;
    const { firstName, lastName, email, imageUrl, major } = req.body;

    const senator = await prisma.senator.findUnique({ where: { id } });

    const updatedSenator = await prisma.senator.update({
      where: { id },
      data: { firstName, lastName, email, imageUrl, major },
    });
    res.json(updatedSenator);
  } catch (err) {
    next(err);
  }
});