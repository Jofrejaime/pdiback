/*
  Warnings:

  - A unique constraint covering the columns `[label]` on the table `areas` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "AreaofProfile" (
    "id" TEXT NOT NULL,
    "areaLabel" TEXT NOT NULL,

    CONSTRAINT "AreaofProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AreaofProfileToProfile" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "AreaofProfile_areaLabel_key" ON "AreaofProfile"("areaLabel");

-- CreateIndex
CREATE UNIQUE INDEX "_AreaofProfileToProfile_AB_unique" ON "_AreaofProfileToProfile"("A", "B");

-- CreateIndex
CREATE INDEX "_AreaofProfileToProfile_B_index" ON "_AreaofProfileToProfile"("B");

-- CreateIndex
CREATE UNIQUE INDEX "areas_label_key" ON "areas"("label");

-- AddForeignKey
ALTER TABLE "AreaofProfile" ADD CONSTRAINT "AreaofProfile_areaLabel_fkey" FOREIGN KEY ("areaLabel") REFERENCES "areas"("label") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AreaofProfileToProfile" ADD CONSTRAINT "_AreaofProfileToProfile_A_fkey" FOREIGN KEY ("A") REFERENCES "AreaofProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AreaofProfileToProfile" ADD CONSTRAINT "_AreaofProfileToProfile_B_fkey" FOREIGN KEY ("B") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
