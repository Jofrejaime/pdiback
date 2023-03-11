/*
  Warnings:

  - Made the column `projectId` on table `commments` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "commments" DROP CONSTRAINT "commments_projectId_fkey";

-- AlterTable
ALTER TABLE "commments" ALTER COLUMN "projectId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "commments" ADD CONSTRAINT "commments_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
