CREATE TABLE "Senator" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
);

-- CreateIndex
CREATE UNIQUE INDEX "Senator_firstName_key" ON "Senator"("firstName");

-- CREATE TABLE "Executives" (
--     "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
--     "firstName" TEXT NOT NULL,
--     "lastName" TEXT NOT NULL,
--     "email" TEXT NOT NULL,
--     "imageUrl" TEXT NOT NULL,
-- );

