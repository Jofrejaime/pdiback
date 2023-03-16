/*
  Warnings:

  - The primary key for the `LinkOfProfile` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `profileId` on the `LinkOfProfile` table. All the data in the column will be lost.
  - Added the required column `profileI` to the `LinkOfProfile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "LinkOfProfile" DROP CONSTRAINT "LinkOfProfile_profileId_fkey";

-- AlterTable
ALTER TABLE "LinkOfProfile" DROP CONSTRAINT "LinkOfProfile_pkey",
DROP COLUMN "profileId",
ADD COLUMN     "profileI" TEXT NOT NULL,
ADD CONSTRAINT "LinkOfProfile_pkey" PRIMARY KEY ("profileI", "linkName");

-- AddForeignKey
ALTER TABLE "LinkOfProfile" ADD CONSTRAINT "LinkOfProfile_profileI_fkey" FOREIGN KEY ("profileI") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
