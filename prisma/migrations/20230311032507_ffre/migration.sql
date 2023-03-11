/*
  Warnings:

  - You are about to drop the column `genderName` on the `profiles` table. All the data in the column will be lost.
  - Added the required column `genderId` to the `profiles` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "profiles" DROP CONSTRAINT "profiles_genderName_fkey";

-- AlterTable
ALTER TABLE "profiles" DROP COLUMN "genderName",
ADD COLUMN     "genderId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_genderId_fkey" FOREIGN KEY ("genderId") REFERENCES "genders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
