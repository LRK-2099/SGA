/*
  Warnings:

  - You are about to drop the `Resoultions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Resoultions";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Resolutions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "resname" TEXT NOT NULL
);
