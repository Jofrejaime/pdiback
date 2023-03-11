/*
  Warnings:

  - You are about to drop the `LinksOfProfile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "LinksOfProfile" DROP CONSTRAINT "LinksOfProfile_linkName_fkey";

-- DropForeignKey
ALTER TABLE "LinksOfProfile" DROP CONSTRAINT "LinksOfProfile_profileId_fkey";

-- DropIndex
DROP INDEX "LanguageOfProfile_profileId_languageLabel_key";

-- DropIndex
DROP INDEX "ToolofProfile_profileId_toolLabel_key";

-- AlterTable
ALTER TABLE "LanguageOfProfile" ADD CONSTRAINT "LanguageOfProfile_pkey" PRIMARY KEY ("profileId", "languageLabel");

-- AlterTable
ALTER TABLE "ToolofProfile" ADD CONSTRAINT "ToolofProfile_pkey" PRIMARY KEY ("profileId", "toolLabel");

-- DropTable
DROP TABLE "LinksOfProfile";

-- CreateTable
CREATE TABLE "LanguageOfProject" (
    "projectId" TEXT NOT NULL,
    "languageLabel" TEXT NOT NULL,

    CONSTRAINT "LanguageOfProject_pkey" PRIMARY KEY ("projectId","languageLabel")
);

-- CreateTable
CREATE TABLE "ProjectRepository" (
    "projectId" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "ProjectRepository_pkey" PRIMARY KEY ("projectId","link")
);

-- CreateTable
CREATE TABLE "LinkOfProfile" (
    "linkName" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,

    CONSTRAINT "LinkOfProfile_pkey" PRIMARY KEY ("profileId","linkName")
);

-- CreateTable
CREATE TABLE "AreaOfProject" (
    "projectId" TEXT NOT NULL,
    "areaLabel" TEXT NOT NULL,

    CONSTRAINT "AreaOfProject_pkey" PRIMARY KEY ("projectId","areaLabel")
);

-- CreateTable
CREATE TABLE "ToolOfProject" (
    "projectId" TEXT NOT NULL,
    "toolLabel" TEXT NOT NULL,

    CONSTRAINT "ToolOfProject_pkey" PRIMARY KEY ("projectId","toolLabel")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProjectRepository_projectId_key" ON "ProjectRepository"("projectId");

-- AddForeignKey
ALTER TABLE "LanguageOfProject" ADD CONSTRAINT "LanguageOfProject_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LanguageOfProject" ADD CONSTRAINT "LanguageOfProject_languageLabel_fkey" FOREIGN KEY ("languageLabel") REFERENCES "languages"("label") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectRepository" ADD CONSTRAINT "ProjectRepository_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinkOfProfile" ADD CONSTRAINT "LinkOfProfile_linkName_fkey" FOREIGN KEY ("linkName") REFERENCES "links"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinkOfProfile" ADD CONSTRAINT "LinkOfProfile_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AreaOfProject" ADD CONSTRAINT "AreaOfProject_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AreaOfProject" ADD CONSTRAINT "AreaOfProject_areaLabel_fkey" FOREIGN KEY ("areaLabel") REFERENCES "areas"("label") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToolOfProject" ADD CONSTRAINT "ToolOfProject_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToolOfProject" ADD CONSTRAINT "ToolOfProject_toolLabel_fkey" FOREIGN KEY ("toolLabel") REFERENCES "tools"("label") ON DELETE RESTRICT ON UPDATE CASCADE;
