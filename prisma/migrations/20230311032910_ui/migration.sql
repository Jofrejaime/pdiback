-- DropForeignKey
ALTER TABLE "profiles" DROP CONSTRAINT "profiles_genderId_fkey";

-- DropForeignKey
ALTER TABLE "profiles" DROP CONSTRAINT "profiles_paisLabel_fkey";

-- AlterTable
ALTER TABLE "profiles" ALTER COLUMN "paisLabel" DROP NOT NULL,
ALTER COLUMN "genderId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_genderId_fkey" FOREIGN KEY ("genderId") REFERENCES "genders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_paisLabel_fkey" FOREIGN KEY ("paisLabel") REFERENCES "paises"("label") ON DELETE SET NULL ON UPDATE CASCADE;
