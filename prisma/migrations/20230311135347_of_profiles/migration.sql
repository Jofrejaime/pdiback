/*
  Warnings:

  - You are about to drop the column `profileId` on the `links` table. All the data in the column will be lost.
  - You are about to drop the `_AreaToProfile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AreaToProject` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_AreaToProfile" DROP CONSTRAINT "_AreaToProfile_A_fkey";

-- DropForeignKey
ALTER TABLE "_AreaToProfile" DROP CONSTRAINT "_AreaToProfile_B_fkey";

-- DropForeignKey
ALTER TABLE "_AreaToProject" DROP CONSTRAINT "_AreaToProject_A_fkey";

-- DropForeignKey
ALTER TABLE "_AreaToProject" DROP CONSTRAINT "_AreaToProject_B_fkey";

-- DropForeignKey
ALTER TABLE "links" DROP CONSTRAINT "links_profileId_fkey";

-- DropIndex
DROP INDEX "AreaofProfile_areaLabel_key";

-- AlterTable
ALTER TABLE "links" DROP COLUMN "profileId";

-- DropTable
DROP TABLE "_AreaToProfile";

-- DropTable
DROP TABLE "_AreaToProject";

-- CreateTable
CREATE TABLE "LinksOfProfile" (
    "id" TEXT NOT NULL,
    "linkName" TEXT NOT NULL,

    CONSTRAINT "LinksOfProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_LinksOfProfileToProfile" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "LinksOfProfile_linkName_key" ON "LinksOfProfile"("linkName");

-- CreateIndex
CREATE UNIQUE INDEX "_LinksOfProfileToProfile_AB_unique" ON "_LinksOfProfileToProfile"("A", "B");

-- CreateIndex
CREATE INDEX "_LinksOfProfileToProfile_B_index" ON "_LinksOfProfileToProfile"("B");

-- AddForeignKey
ALTER TABLE "LinksOfProfile" ADD CONSTRAINT "LinksOfProfile_linkName_fkey" FOREIGN KEY ("linkName") REFERENCES "links"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LinksOfProfileToProfile" ADD CONSTRAINT "_LinksOfProfileToProfile_A_fkey" FOREIGN KEY ("A") REFERENCES "LinksOfProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LinksOfProfileToProfile" ADD CONSTRAINT "_LinksOfProfileToProfile_B_fkey" FOREIGN KEY ("B") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
