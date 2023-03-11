/*
  Warnings:

  - You are about to drop the column `areaLabel` on the `profiles` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "profiles" DROP CONSTRAINT "profiles_areaLabel_fkey";

-- AlterTable
ALTER TABLE "areas" ADD COLUMN     "profileId" TEXT;

-- AlterTable
ALTER TABLE "profiles" DROP COLUMN "areaLabel";

-- AddForeignKey
ALTER TABLE "areas" ADD CONSTRAINT "areas_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;
