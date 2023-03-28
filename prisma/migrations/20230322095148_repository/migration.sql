/*
  Warnings:

  - You are about to drop the column `projectRepository` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `respository_url` on the `projects` table. All the data in the column will be lost.
  - Added the required column `repository` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "projects" DROP COLUMN "projectRepository",
DROP COLUMN "respository_url",
ADD COLUMN     "repository" TEXT NOT NULL;
