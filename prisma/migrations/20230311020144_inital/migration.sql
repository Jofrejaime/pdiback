-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "starsNumber" INTEGER,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profiles" (
    "id" TEXT NOT NULL,
    "bio" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "photo_url" TEXT,
    "userId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "genderName" TEXT NOT NULL,
    "paisLabel" TEXT NOT NULL,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "paises" (
    "value" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "acronym1" TEXT,
    "acronym2" TEXT,
    "code" TEXT,

    CONSTRAINT "paises_pkey" PRIMARY KEY ("value")
);

-- CreateTable
CREATE TABLE "genders" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "genders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stars" (
    "userId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "stars_pkey" PRIMARY KEY ("userId","projectId")
);

-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "respository_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "images" (
    "id" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "projectId" TEXT,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "videos" (
    "id" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "videos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "audios" (
    "id" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "audios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "languages" (
    "value" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "icon_url" TEXT NOT NULL,
    "projectId" TEXT,

    CONSTRAINT "languages_pkey" PRIMARY KEY ("value")
);

-- CreateTable
CREATE TABLE "areas" (
    "value" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "projectId" TEXT,

    CONSTRAINT "areas_pkey" PRIMARY KEY ("value")
);

-- CreateTable
CREATE TABLE "tools" (
    "value" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "icon_url" TEXT NOT NULL,
    "projectId" TEXT,
    "profileId" TEXT,

    CONSTRAINT "tools_pkey" PRIMARY KEY ("value")
);

-- CreateTable
CREATE TABLE "links" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "src" TEXT NOT NULL,
    "href" TEXT NOT NULL,
    "profileId" TEXT,

    CONSTRAINT "links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "commments" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "projectId" TEXT,

    CONSTRAINT "commments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bannedaccounts" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "banned_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bannedaccounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_LanguageToProfile" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AreaToProfile" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_userName_key" ON "users"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_userId_key" ON "profiles"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "paises_label_key" ON "paises"("label");

-- CreateIndex
CREATE UNIQUE INDEX "genders_name_key" ON "genders"("name");

-- CreateIndex
CREATE UNIQUE INDEX "projects_title_key" ON "projects"("title");

-- CreateIndex
CREATE UNIQUE INDEX "images_url_key" ON "images"("url");

-- CreateIndex
CREATE UNIQUE INDEX "videos_url_key" ON "videos"("url");

-- CreateIndex
CREATE UNIQUE INDEX "audios_url_key" ON "audios"("url");

-- CreateIndex
CREATE UNIQUE INDEX "languages_label_key" ON "languages"("label");

-- CreateIndex
CREATE UNIQUE INDEX "areas_label_key" ON "areas"("label");

-- CreateIndex
CREATE UNIQUE INDEX "tools_label_key" ON "tools"("label");

-- CreateIndex
CREATE UNIQUE INDEX "links_name_key" ON "links"("name");

-- CreateIndex
CREATE UNIQUE INDEX "bannedaccounts_email_key" ON "bannedaccounts"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_LanguageToProfile_AB_unique" ON "_LanguageToProfile"("A", "B");

-- CreateIndex
CREATE INDEX "_LanguageToProfile_B_index" ON "_LanguageToProfile"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AreaToProfile_AB_unique" ON "_AreaToProfile"("A", "B");

-- CreateIndex
CREATE INDEX "_AreaToProfile_B_index" ON "_AreaToProfile"("B");

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_genderName_fkey" FOREIGN KEY ("genderName") REFERENCES "genders"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_paisLabel_fkey" FOREIGN KEY ("paisLabel") REFERENCES "paises"("label") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stars" ADD CONSTRAINT "stars_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stars" ADD CONSTRAINT "stars_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "videos" ADD CONSTRAINT "videos_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audios" ADD CONSTRAINT "audios_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "languages" ADD CONSTRAINT "languages_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "areas" ADD CONSTRAINT "areas_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tools" ADD CONSTRAINT "tools_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tools" ADD CONSTRAINT "tools_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "links" ADD CONSTRAINT "links_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commments" ADD CONSTRAINT "commments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commments" ADD CONSTRAINT "commments_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LanguageToProfile" ADD CONSTRAINT "_LanguageToProfile_A_fkey" FOREIGN KEY ("A") REFERENCES "languages"("value") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LanguageToProfile" ADD CONSTRAINT "_LanguageToProfile_B_fkey" FOREIGN KEY ("B") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AreaToProfile" ADD CONSTRAINT "_AreaToProfile_A_fkey" FOREIGN KEY ("A") REFERENCES "areas"("value") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AreaToProfile" ADD CONSTRAINT "_AreaToProfile_B_fkey" FOREIGN KEY ("B") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
