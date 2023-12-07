const prisma = require("../prisma");

const seed = async () => {
  const data = [
    {
      firstName: "Ava",
      lastName: "Allen",
      email: "avaallen@gmail.com",
      imageUrl: "https://example.com/ava.jpg",
      major: "Psychology",
    },
    {
      firstName: "Mohamed",
      lastName: "Souhail",
      email: "mohamedsouhail@gmail.com",
      imageUrl: "https://example.com/mohamed.jpg",
      major: "international business",
    },
    {
      firstName: "Ashley",
      lastName: "Wrobeh",
      email: "ashleywrobeh@gmail.com",
      imageUrl: "https://example.com/ashley.jpg",
      major: "biology",
    },
    {
      firstName: "Alicia",
      lastName: "Crimmins",
      email: "aliciacrimmins@gmail.com",
      imageUrl: "https://example.com/alicia.jpg",
      major: "Liberal Arts",
    },
    {
      firstName: "Lorieta",
      lastName: "Ellis",
      email: "lorietaellis@gmail.com",
      imageUrl: "https://example.com/lorieta.jpg",
      major: "Liberal Arts",
    },
    {
      firstName: "Giomar",
      lastName: "Garcia Maldonado",
      email: "giomargarciamaldonado@gmail.com",
      imageUrl: "https://example.com/giomar.jpg",
      major: "Engineering",
    },
    {
      firstName: "Daniel",
      lastName: "Kalumbwe",
      email: "danielkalumbwe@gmail.com",
      imageUrl: "https://example.com/daniel.jpg",
      major: "Engineering",
    },
  ];

  await Promise.all(
    data.map(async (item) => {
      await prisma.senator.create({
        data: item,
      });
    })
  );
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });

module.exports = seed;
