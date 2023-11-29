const prisma = require("../prisma");

//This line imports the Prisma client, 
//which is an auto-generated query builder for interacting with the database.

/** Seeds the database with a user and some tasks */
const seed = async () => {
  await prisma.senator.create({
    data: {
      firstName: "Ava",
      lastName: "Allen",
      email: "avaallen@gmail.com",
    },
  });
};
 await prisma.senator.create ({
data: {
  firstName: "",
  lastName: "",
  email: "",
  imageUrl: "",
  major:""
}
 })
 await prisma.senator.create ({
  data: {
    firstName: "",
    lastName: "",
    email: "",
    imageUrl: "",
    major:""
  }
   })
   await prisma.senator.create ({
    data: {
      firstName: "",
      lastName: "",
      email: "",
      imageUrl: "",
      major:""
    }
     })
     await prisma.senator.create ({
      data: {
        firstName: "",
        lastName: "",
        email: "",
        imageUrl: "",
        major:""
      }
       })
       await prisma.senator.create ({
        data: {
          firstName: "",
          lastName: "",
          email: "",
          imageUrl: "",
          major:""
        }
         })
         await prisma.senator.create ({
          data: {
            firstName: "",
            lastName: "",
            email: "",
            imageUrl: "",
            major:""
          }
           })
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });