/*
  Warnings:

  - The primary key for the `AreaofProfile` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `AreaofProfile` table. All the data in the column will be lost.
  - The primary key for the `LinksOfProfile` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `LinksOfProfile` table. All the data in the column will be lost.
  - You are about to drop the column `profileId` on the `tools` table. All the data in the column will be lost.
  - You are about to drop the column `projectId` on the `tools` table. All the data in the column will be lost.
  - You are about to drop the `_LanguageToProfile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_LinksOfProfileToProfile` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[profileId,linkName]` on the table `LinksOfProfile` will be added. If there are existing duplicate values, this will fail.
  - Made the column `profileId` on table `AreaofProfile` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `profileId` to the `LinksOfProfile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "AreaofProfile" DROP CONSTRAINT "AreaofProfile_profileId_fkey";

-- DropForeignKey
ALTER TABLE "_LanguageToProfile" DROP CONSTRAINT "_LanguageToProfile_A_fkey";

-- DropForeignKey
ALTER TABLE "_LanguageToProfile" DROP CONSTRAINT "_LanguageToProfile_B_fkey";

-- DropForeignKey
ALTER TABLE "_LinksOfProfileToProfile" DROP CONSTRAINT "_LinksOfProfileToProfile_A_fkey";

-- DropForeignKey
ALTER TABLE "_LinksOfProfileToProfile" DROP CONSTRAINT "_LinksOfProfileToProfile_B_fkey";

-- DropForeignKey
ALTER TABLE "tools" DROP CONSTRAINT "tools_profileId_fkey";

-- DropForeignKey
ALTER TABLE "tools" DROP CONSTRAINT "tools_projectId_fkey";

-- DropIndex
DROP INDEX "AreaofProfile_areaLabel_profileId_key";

-- AlterTable
ALTER TABLE "AreaofProfile" DROP CONSTRAINT "AreaofProfile_pkey",
DROP COLUMN "id",
ALTER COLUMN "profileId" SET NOT NULL,
ADD CONSTRAINT "AreaofProfile_pkey" PRIMARY KEY ("areaLabel", "profileId");

-- AlterTable
ALTER TABLE "LinksOfProfile" DROP CONSTRAINT "LinksOfProfile_pkey",
DROP COLUMN "id",
ADD COLUMN     "profileId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "tools" DROP COLUMN "profileId",
DROP COLUMN "projectId";

-- DropTable
DROP TABLE "_LanguageToProfile";

-- DropTable
DROP TABLE "_LinksOfProfileToProfile";

-- CreateTable
CREATE TABLE "LanguageOfProfile" (
    "profileId" TEXT NOT NULL,
    "languageLabel" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ToolofProfile" (
    "profileId" TEXT NOT NULL,
    "toolLabel" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "LanguageOfProfile_profileId_languageLabel_key" ON "LanguageOfProfile"("profileId", "languageLabel");

-- CreateIndex
CREATE UNIQUE INDEX "ToolofProfile_profileId_toolLabel_key" ON "ToolofProfile"("profileId", "toolLabel");

-- CreateIndex
CREATE UNIQUE INDEX "LinksOfProfile_profileId_linkName_key" ON "LinksOfProfile"("profileId", "linkName");

-- AddForeignKey
ALTER TABLE "LanguageOfProfile" ADD CONSTRAINT "LanguageOfProfile_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LanguageOfProfile" ADD CONSTRAINT "LanguageOfProfile_languageLabel_fkey" FOREIGN KEY ("languageLabel") REFERENCES "languages"("label") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AreaofProfile" ADD CONSTRAINT "AreaofProfile_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinksOfProfile" ADD CONSTRAINT "LinksOfProfile_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToolofProfile" ADD CONSTRAINT "ToolofProfile_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToolofProfile" ADD CONSTRAINT "ToolofProfile_toolLabel_fkey" FOREIGN KEY ("toolLabel") REFERENCES "tools"("label") ON DELETE RESTRICT ON UPDATE CASCADE;
