/*
  Warnings:

  - You are about to drop the column `description` on the `Executives` table. All the data in the column will be lost.
  - You are about to drop the column `done` on the `Executives` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Executives` table. All the data in the column will be lost.
  - Added the required column `email` to the `Executives` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `Executives` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Executives` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Executives` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Executives" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL
);
INSERT INTO "new_Executives" ("id") SELECT "id" FROM "Executives";
DROP TABLE "Executives";
ALTER TABLE "new_Executives" RENAME TO "Executives";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
