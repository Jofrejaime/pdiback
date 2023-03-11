/*
  Warnings:

  - You are about to drop the `_AreaofProfileToProfile` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[areaLabel,profileId]` on the table `AreaofProfile` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "_AreaofProfileToProfile" DROP CONSTRAINT "_AreaofProfileToProfile_A_fkey";

-- DropForeignKey
ALTER TABLE "_AreaofProfileToProfile" DROP CONSTRAINT "_AreaofProfileToProfile_B_fkey";

-- AlterTable
ALTER TABLE "AreaofProfile" ADD COLUMN     "profileId" TEXT;

-- DropTable
DROP TABLE "_AreaofProfileToProfile";

-- CreateIndex
CREATE UNIQUE INDEX "AreaofProfile_areaLabel_profileId_key" ON "AreaofProfile"("areaLabel", "profileId");

-- AddForeignKey
ALTER TABLE "AreaofProfile" ADD CONSTRAINT "AreaofProfile_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;
