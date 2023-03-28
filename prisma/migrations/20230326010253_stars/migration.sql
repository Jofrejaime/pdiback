/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `stars` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "stars_userId_key" ON "stars"("userId");
