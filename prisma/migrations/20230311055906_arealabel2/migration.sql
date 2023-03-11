/*
  Warnings:

  - You are about to drop the column `projectId` on the `areas` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "areas" DROP CONSTRAINT "areas_projectId_fkey";

-- AlterTable
ALTER TABLE "areas" DROP COLUMN "projectId";

-- CreateTable
CREATE TABLE "_AreaToProject" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AreaToProject_AB_unique" ON "_AreaToProject"("A", "B");

-- CreateIndex
CREATE INDEX "_AreaToProject_B_index" ON "_AreaToProject"("B");

-- AddForeignKey
ALTER TABLE "_AreaToProject" ADD CONSTRAINT "_AreaToProject_A_fkey" FOREIGN KEY ("A") REFERENCES "areas"("value") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AreaToProject" ADD CONSTRAINT "_AreaToProject_B_fkey" FOREIGN KEY ("B") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;
