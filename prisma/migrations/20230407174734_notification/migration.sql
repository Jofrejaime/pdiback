/*
  Warnings:

  - Added the required column `issuerId` to the `notifications` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "notifications" ADD COLUMN     "issuerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_issuerId_fkey" FOREIGN KEY ("issuerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
