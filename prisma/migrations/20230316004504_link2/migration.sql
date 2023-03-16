/*
  Warnings:

  - The primary key for the `LinkOfProfile` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `profileI` on the `LinkOfProfile` table. All the data in the column will be lost.
  - Added the required column `profileId` to the `LinkOfProfile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "LinkOfProfile" DROP CONSTRAINT "LinkOfProfile_profileI_fkey";

-- AlterTable
ALTER TABLE "LinkOfProfile" DROP CONSTRAINT "LinkOfProfile_pkey",
DROP COLUMN "profileI",
ADD COLUMN     "profileId" TEXT NOT NULL,
ADD CONSTRAINT "LinkOfProfile_pkey" PRIMARY KEY ("profileId", "linkName");

-- AddForeignKey
ALTER TABLE "LinkOfProfile" ADD CONSTRAINT "LinkOfProfile_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
