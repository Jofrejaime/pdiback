/*
  Warnings:

  - You are about to drop the column `genderName` on the `profiles` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "profiles" DROP CONSTRAINT "profiles_genderName_fkey";

-- AlterTable
ALTER TABLE "profiles" DROP COLUMN "genderName";

-- CreateTable
CREATE TABLE "_GenderToProfile" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_GenderToProfile_AB_unique" ON "_GenderToProfile"("A", "B");

-- CreateIndex
CREATE INDEX "_GenderToProfile_B_index" ON "_GenderToProfile"("B");

-- AddForeignKey
ALTER TABLE "_GenderToProfile" ADD CONSTRAINT "_GenderToProfile_A_fkey" FOREIGN KEY ("A") REFERENCES "genders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenderToProfile" ADD CONSTRAINT "_GenderToProfile_B_fkey" FOREIGN KEY ("B") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
