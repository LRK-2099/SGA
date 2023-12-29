const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


 async function seed () {
  const senatorData = [
    {
      firstName: "Ava",
      lastName: "Allen",
      email: "avaallen@gmail.com",
      imageUrl: "https://images.generated.photos/aEOqAmPTlCAeSgPwrLqqKvYemlvN0MhPVTZL30UNB2c/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjIwMzQ5LmpwZw.jpg",
      major: "Chief of staff",
    },
    {
      firstName: "Mohamed",
      lastName: "Souhail",
      email: "mohamedsouhail@gmail.com",
      imageUrl: "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-8.jpg",
      major: "Athletic Senator",
    },
    {
      firstName: "Ashley",
      lastName: "Wrobeh",
      email: "ashleywrobeh@gmail.com",
      imageUrl: "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-7.jpg",
      major: "Health and Wellness Senator",
    },
    {
      firstName: "Alicia",
      lastName: "Crimmins",
      email: "aliciacrimmins@gmail.com",
      imageUrl: "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-5.jpg",
      major: "Resident Halls Senator",
    },
    {
      firstName: "Lorieta",
      lastName: "Ellis",
      email: "lorietaellis@gmail.com",
      imageUrl: "https://faces3.b-cdn.net/Iceland.png",
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
      imageUrl: "https://static.boredpanda.com/blog/wp-content/uploads/2018/12/ai-image-generation-fake-faces-people-nvidia-5c18b207b7231__700.jpg",
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
        imageUrl: "https://1.img-dpreview.com/files/p/TS560x560~forums/63132016/2a1e59e12f4543bea10f2385259c81cf",
        major: "Vice President of Downtown",
      },
      {
        firstName: "Zeynep",
        lastName: "Güney",
        email: "zeynepguney@example.com",
        imageUrl: "https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-01.jpg",
        major: "Treasurer"
      },
      {
        firstName: "Ivy",
        lastName: "Zin",
        email: "ivy@example.com",
        imageUrl: "https://api.deepai.org/job-view-file/47ae8a39-0ab9-4834-a631-778f6e2a6b0e/outputs/output.jpg",
        major: "Secertary of governance"
      },
      {
        firstName: "Paula",
        lastName: "Barlow",
        email: "paulabarlow@example.com",
        imageUrl: "https://images.generated.photos/m6LxtP61qAzW6x7XNMzpRlfSApgBnW8xbkyt5t7Zqtc/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTA2NzE3LmpwZw.jpg",
        major: "Historian"
      },
      {
        firstName: "Naz",
        lastName: "Barmak",
        email: "nazbarmak@example.com",
        imageUrl: "https://images.generated.photos/LjDfLDCaAFjmdMIo3eIXJYSVL-RydEJLgqXc35wHbLw/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDY0NDI3LmpwZw.jpg",
        major: "Election cordinator",
      },
    ];
    const resolutionData = [
      {
        ResName: "Sample Resolution 1",
        email: "resolution1@example.com",
      },
      {
        ResName: "Sample Resolution 2",
        email: "resolution2@example.com",
      },
      // Add more resolution data as needed
    ];
  
  const appointmentData = [
    {
      date: "2023-12-01",
      timeSlot: "10:00",
      email: "john.doe@example.com",
      phoneNumber: "123-456-7890",
    },
    {
      date: "2023-12-02",
      timeSlot: "14:30",
      email: "jane.smith@example.com",
      phoneNumber: "987-654-3210",
    },
  ];


  const senators = await prisma.senator.findMany();
   console.log(senators);
   for (const senator of senatorData) {
     await prisma.Senator.create({ data: senator });
   }
     // Seed resolution data
     prisma.Resolutions.createMany({
       data: resolutionData,
     }),
     // Seed appointment data
    prisma.Appointment.createMany({
       data: appointmentData,
     });
  };
  seed()
   .then(async () => {await prisma.$disconnect()})
   .catch(async (err) => {
     console.error(err);
     await prisma.$disconnect();
     process.exit(1);
   });


