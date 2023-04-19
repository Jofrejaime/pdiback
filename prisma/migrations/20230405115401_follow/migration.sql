/*
  Warnings:

  - You are about to drop the `Seguir` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Seguir" DROP CONSTRAINT "Seguir_seguidorId_fkey";

-- DropForeignKey
ALTER TABLE "Seguir" DROP CONSTRAINT "Seguir_seguindoId_fkey";

-- DropTable
DROP TABLE "Seguir";

-- CreateTable
CREATE TABLE "follow" (
    "followerId" TEXT NOT NULL,
    "followingId" TEXT NOT NULL,

    CONSTRAINT "follow_pkey" PRIMARY KEY ("followerId","followingId")
);

-- AddForeignKey
ALTER TABLE "follow" ADD CONSTRAINT "follow_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "follow" ADD CONSTRAINT "follow_followingId_fkey" FOREIGN KEY ("followingId") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
