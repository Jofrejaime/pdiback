/*
  Warnings:

  - You are about to drop the `_AreaToProfile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_AreaToProfile" DROP CONSTRAINT "_AreaToProfile_A_fkey";

-- DropForeignKey
ALTER TABLE "_AreaToProfile" DROP CONSTRAINT "_AreaToProfile_B_fkey";

-- AlterTable
ALTER TABLE "profiles" ADD COLUMN     "areaLabel" TEXT;

-- DropTable
DROP TABLE "_AreaToProfile";

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_areaLabel_fkey" FOREIGN KEY ("areaLabel") REFERENCES "areas"("label") ON DELETE SET NULL ON UPDATE CASCADE;
