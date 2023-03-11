/*
  Warnings:

  - You are about to drop the `_GenderToProfile` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `genderName` to the `profiles` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_GenderToProfile" DROP CONSTRAINT "_GenderToProfile_A_fkey";

-- DropForeignKey
ALTER TABLE "_GenderToProfile" DROP CONSTRAINT "_GenderToProfile_B_fkey";

-- AlterTable
ALTER TABLE "profiles" ADD COLUMN     "genderName" TEXT NOT NULL;

-- DropTable
DROP TABLE "_GenderToProfile";

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_genderName_fkey" FOREIGN KEY ("genderName") REFERENCES "genders"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
