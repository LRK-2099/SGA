CREATE TABLE "Senator" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "major" TEXT NOT NULL
);

CREATE TABLE "Executives" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "major" TEXT NOT NULL
);

CREATE TABLE "Resoultions" (
"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
"ResName" TEXT NOT NULL,
"email" TEXT NOT NULL
);

CREATE TABLE "Appointment" (
"id" INTEGER
"Date" TEXT NOT NULL
"email" TEXT NOT NULL
"phonenumber" TEXT NOT NULL
"timeSlot" TEXT NOT NULL
);