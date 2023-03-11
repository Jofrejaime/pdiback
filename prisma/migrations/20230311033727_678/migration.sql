/*
  Warnings:

  - You are about to drop the column `genderId` on the `profiles` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "profiles" DROP CONSTRAINT "profiles_genderId_fkey";

-- AlterTable
ALTER TABLE "profiles" DROP COLUMN "genderId",
ADD COLUMN     "genderName" TEXT;

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_genderName_fkey" FOREIGN KEY ("genderName") REFERENCES "genders"("name") ON DELETE SET NULL ON UPDATE CASCADE;
