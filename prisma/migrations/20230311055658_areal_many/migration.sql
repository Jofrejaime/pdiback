/*
  Warnings:

  - You are about to drop the column `profileId` on the `areas` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "areas" DROP CONSTRAINT "areas_profileId_fkey";

-- AlterTable
ALTER TABLE "areas" DROP COLUMN "profileId";

-- CreateTable
CREATE TABLE "_AreaToProfile" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AreaToProfile_AB_unique" ON "_AreaToProfile"("A", "B");

-- CreateIndex
CREATE INDEX "_AreaToProfile_B_index" ON "_AreaToProfile"("B");

-- AddForeignKey
ALTER TABLE "_AreaToProfile" ADD CONSTRAINT "_AreaToProfile_A_fkey" FOREIGN KEY ("A") REFERENCES "areas"("value") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AreaToProfile" ADD CONSTRAINT "_AreaToProfile_B_fkey" FOREIGN KEY ("B") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
