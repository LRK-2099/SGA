// const { ServerError } = require("../errors");
// const express = require("express");
// const router = express.Router();
// module.exports = router;

// const prisma = require("../prisma");

// router.get("/", async (req, res, next) => {
//   try {
//     const resolutionData = await prisma.senator.findMany();
//     console.log(resolutionData);
//     res.json(resolutionData);
//   } catch {
//     next();
//   }
// });

// router.get("/:id", async (req, res, next) => {
//   try {
//     const id = +req.params.id;
//     const resolutionById = await prisma.senator.findUnique({ where: { id } });
//     if (!resolutionById) {
//       return next({
//         status: 404,
//         message: `no resolutions here ${id}`,
//       });
//     }
//     res.json(resolutionById);
//   } catch {
//     next();
//   }
// });

// router.post("/", async (req, res, next) => {
//   try {
//     const { firstName, lastName, email, imageUrl, major } = req.body;

//     if (!firstName) {
//       throw new ServerError(400, "missing first name");
//     }
//     if (!lastName) {
//       throw new ServerError(400, "lastname");
//     }
//     if (!imageUrl) {
//       throw new ServerError(400, "image not found");
//     }
//     if (!email) {
//       throw new ServerError(400, "invalid Email");
//     }
//     if (!major) {
//       throw new ServerError(400, "major not found");
//     }

//     const resolution = await prisma.resolution.create({
//       data: {
     
//       },
//     });
//     res.json(resolution);
//   } catch (err) {
//     next(err);
//   }
// });

// //delete
// router.delete("/:id", async (req, res, next) => {
//   try {
//     const id = +req.params.id;

//     const resolution = await prisma.senator.findUnique({ where: { id } });

//     await prisma.senator.delete({ where: { id } });
//     res.sendStatus(204);
//   } catch (err) {
//     next(err);
//   }
// });

// router.put("/:id", async (req, res, next) => {
//   try {
//     const id = +req.params.id;
//     const { firstName, lastName, email, imageUrl, major } = req.body;

//     const resolution = await prisma.resolution.findUnique({ where: { id } });

//     const updatedResolution = await prisma.resolution.update({
//       where: { id },
//       data: { //add varables here  },
//     });
//     res.json(updatedResolution);
//   } catch (err) {
//     next(err);
//   }
// });
