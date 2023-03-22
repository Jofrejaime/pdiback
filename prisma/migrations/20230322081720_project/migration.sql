/*
  Warnings:

  - You are about to drop the `ProjectRepository` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `audios` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `images` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `videos` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `files` to the `projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectRepository` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProjectRepository" DROP CONSTRAINT "ProjectRepository_projectId_fkey";

-- DropForeignKey
ALTER TABLE "audios" DROP CONSTRAINT "audios_projectId_fkey";

-- DropForeignKey
ALTER TABLE "images" DROP CONSTRAINT "images_projectId_fkey";

-- DropForeignKey
ALTER TABLE "videos" DROP CONSTRAINT "videos_projectId_fkey";

-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "files" TEXT NOT NULL,
ADD COLUMN     "projectRepository" TEXT NOT NULL;

-- DropTable
DROP TABLE "ProjectRepository";

-- DropTable
DROP TABLE "audios";

-- DropTable
DROP TABLE "images";

-- DropTable
DROP TABLE "videos";
