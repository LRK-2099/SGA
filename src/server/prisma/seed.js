const prisma = require("../prisma");

const seed = async () => {
  await prisma.senator.create({
    data: {
      firstName: "Ava",
      lastName: "Allen",
      email: "avaallen@gmail.com",
      imageUrl: "https://example.com/ava.jpg",
      major: "Psychology",
    },
  });
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });

module.exports = seed;