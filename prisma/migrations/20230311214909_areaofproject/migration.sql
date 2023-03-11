/*
  Warnings:

  - You are about to drop the column `projectId` on the `languages` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "languages" DROP CONSTRAINT "languages_projectId_fkey";

-- AlterTable
ALTER TABLE "languages" DROP COLUMN "projectId";
