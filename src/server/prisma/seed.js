const prisma = require("../prisma");

const seed = async () => {
  const data = [
    {
      firstName: "Ava",
      lastName: "Allen",
      email: "avaallen@gmail.com",
      imageUrl: "https://example.com/ava.jpg",
      major: "Chief of staff",
    },
    {
      firstName: "Mohamed",
      lastName: "Souhail",
      email: "mohamedsouhail@gmail.com",
      imageUrl: "https://media.licdn.com/dms/image/D4E03AQFB496c9j-gBA/profile-displayphoto-shrink_200_200/0/1673791272604?e=2147483647&v=beta&t=f4Q21s0WYlVxfjenNnYg4fod3U4ojfvaAyO9hZuQWB8",
      major: "Athletic Senator",
    },
    {
      firstName: "Ashley",
      lastName: "Wrobeh",
      email: "ashleywrobeh@gmail.com",
      imageUrl: "https://media.licdn.com/dms/image/D5603AQEzkXF-Ln34hw/profile-displayphoto-shrink_800_800/0/1666697863405?e=2147483647&v=beta&t=nKdfZ6EnkesyVmeZVmuRJs97UWZ4LvD0ume86H-ReHk",
      major: "Health and Wellness Senator",
    },
    {
      firstName: "Alicia",
      lastName: "Crimmins",
      email: "aliciacrimmins@gmail.com",
      imageUrl: "https://media.licdn.com/dms/image/D4E03AQFVjJ4Yhz9dlw/profile-displayphoto-shrink_800_800/0/1685404599754?e=2147483647&v=beta&t=6rX-HxzMbyflVHrNqMRUU6wnmJdP7QWilxNTkdbyFxo",
      major: "Resident Halls Senator",
    },
    {
      firstName: "Lorieta",
      lastName: "Ellis",
      email: "lorietaellis@gmail.com",
      imageUrl: "https://media.licdn.com/dms/image/C5603AQHvtpH2XLlUWg/profile-displayphoto-shrink_200_200/0/1516516484612?e=2147483647&v=beta&t=A0cbvZqzZyrT2eTkvXb00pvHvFZvpyaNGSXcHxL2jG0",
      major: "Virtual Campus senator",
    },
    {
      firstName: "Giomar",
      lastName: "Garcia Maldonado",
      email: "giomargarciamaldonado@gmail.com",
      imageUrl: "https://media.licdn.com/dms/image/sync/C4D22AQFeFPqfyyaeMg/feedshare-shrink_800/0/1646342077798?e=1704931200&v=beta&t=QbSQ-5TidkAPdUUCW2u2VsOkCcVxHep9mXbQ3HfYZNY",
      major: "Clubs and Orginization senator",
    },
    {
      firstName: "Daniel",
      lastName: "Kalumbwe",
      email: "danielkalumbwe@gmail.com",
      imageUrl: "https://media.licdn.com/dms/image/D5603AQH0aDXsDGVReA/profile-displayphoto-shrink_200_200/0/1692844849368?e=1707955200&v=beta&t=wjG85gsBqZD26pmqoDnAnYHVhV_sBhNBJ1dvEGRYZeg",
      major: "Clubs and Orginizatrions senator ",
    },

      {
        firstName: "Joseph",
        lastName: "Leichtner",
        email: "josephleichtner@example.com",
        imageUrl: "https://image.maxpreps.io/Gallery/ByohSoho7EWwh6AywQG7Gg/touKyNyNB0e90_OXOD80Cg/1,660,520/joshua_springs_desert_christian_academy_boys_football_image.jpg",
        major: "President ",
      },
      {
        firstName: "Angelo",
        lastName: "Romero",
        email: "angeloromero@example.com",
        imageUrl: "https://media.licdn.com/dms/image/D4E03AQFqi03ICPlE4Q/profile-displayphoto-shrink_200_200/0/1700432235576?e=1707955200&v=beta&t=4YffP9S3oZsKt3NMKOWqG3u44vHpM9nh_oJhJt7WEEo",
        major: "vice Presdent",
      },
      {
        firstName: "Mandie",
        lastName: "McGinnis",
        email: "mandiemcginnis@example.com",
        imageUrl: "https://sa1s3optim.patientpop.com/200x200/filters:format(webp)/assets/images/provider/photos/2179504.jpg",
        major: "Vice President of Downtown",
      },
      {
        firstName: "Zeynep",
        lastName: "Güney",
        email: "zeynepguney@example.com",
        imageUrl: "https://media.licdn.com/dms/image/D4D03AQHru4ij-wvJtw/profile-displayphoto-shrink_200_200/0/1699364219213?e=2147483647&v=beta&t=a1uFVo7KgEZUbmjfB4GixHQP1uDqSQLjNL1L8jIkkOU",
        major: "Treasurer"
      },
      {
        firstName: "Ivy",
        lastName: "Zin",
        email: "ivy@example.com",
        imageUrl: "https://miro.medium.com/v2/resize:fit:1200/1*pHb0M9z_UMhO22HlaOl2zw.jpeg",
        major: "Secertary of governance"
      },
      {
        firstName: "Paula",
        lastName: "Barlow",
        email: "paulabarlow@example.com",
        imageUrl: "https://media.licdn.com/dms/image/D4E03AQEmuXflGImItw/profile-displayphoto-shrink_800_800/0/1673817470794?e=2147483647&v=beta&t=oERuOsRGsX1NdIbrkBbSWGW35ow8gx2ATcx667At4iI",
        major: "Historian"
      },
      {
        firstName: "Naz",
        lastName: "Barmak",
        email: "nazbarmak@example.com",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BYmE0NGI3NWUtNGNlMC00ODAzLWI4MzQtNmE0MTVmNzk3MzFiXkEyXkFqcGdeQXVyMTE0MzQwMjgz._V1_QL75_UX500_CR0,26,500,281_.jpg",
        major: "Election cordinator",
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
