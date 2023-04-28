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
    "genderName" TEXT,
    "paisLabel" TEXT,

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
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "stars_pkey" PRIMARY KEY ("userId","projectId")
);

-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "files" TEXT NOT NULL,
    "repository" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LanguageOfProject" (
    "projectId" TEXT NOT NULL,
    "languageLabel" TEXT NOT NULL,

    CONSTRAINT "LanguageOfProject_pkey" PRIMARY KEY ("projectId","languageLabel")
);

-- CreateTable
CREATE TABLE "LanguageOfProfile" (
    "profileId" TEXT NOT NULL,
    "languageLabel" TEXT NOT NULL,

    CONSTRAINT "LanguageOfProfile_pkey" PRIMARY KEY ("profileId","languageLabel")
);

-- CreateTable
CREATE TABLE "languages" (
    "value" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "icon_url" TEXT,

    CONSTRAINT "languages_pkey" PRIMARY KEY ("value")
);

-- CreateTable
CREATE TABLE "AreaofProfile" (
    "areaLabel" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,

    CONSTRAINT "AreaofProfile_pkey" PRIMARY KEY ("areaLabel","profileId")
);

-- CreateTable
CREATE TABLE "LinksToProfile" (
    "label" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,

    CONSTRAINT "LinksToProfile_pkey" PRIMARY KEY ("label","username")
);

-- CreateTable
CREATE TABLE "AreaOfProject" (
    "projectId" TEXT NOT NULL,
    "areaLabel" TEXT NOT NULL,

    CONSTRAINT "AreaOfProject_pkey" PRIMARY KEY ("projectId","areaLabel")
);

-- CreateTable
CREATE TABLE "areas" (
    "value" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "image_url" TEXT,

    CONSTRAINT "areas_pkey" PRIMARY KEY ("value")
);

-- CreateTable
CREATE TABLE "ToolOfProject" (
    "projectId" TEXT NOT NULL,
    "toolLabel" TEXT NOT NULL,

    CONSTRAINT "ToolOfProject_pkey" PRIMARY KEY ("projectId","toolLabel")
);

-- CreateTable
CREATE TABLE "tools" (
    "value" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "icon_url" TEXT NOT NULL,

    CONSTRAINT "tools_pkey" PRIMARY KEY ("value")
);

-- CreateTable
CREATE TABLE "ToolofProfile" (
    "profileId" TEXT NOT NULL,
    "toolLabel" TEXT NOT NULL,

    CONSTRAINT "ToolofProfile_pkey" PRIMARY KEY ("profileId","toolLabel")
);

-- CreateTable
CREATE TABLE "links" (
    "value" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "links_pkey" PRIMARY KEY ("value")
);

-- CreateTable
CREATE TABLE "nada" (
    "value" TEXT NOT NULL,

    CONSTRAINT "nada_pkey" PRIMARY KEY ("value")
);

-- CreateTable
CREATE TABLE "commments" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,

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
CREATE TABLE "follow" (
    "followerId" TEXT NOT NULL,
    "followingId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "follow_pkey" PRIMARY KEY ("followerId","followingId")
);

-- CreateTable
CREATE TABLE "views" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "viewerName" TEXT NOT NULL,

    CONSTRAINT "views_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MemberToConversation" (
    "memberId" TEXT NOT NULL,
    "conversationId" TEXT NOT NULL,

    CONSTRAINT "MemberToConversation_pkey" PRIMARY KEY ("memberId","conversationId")
);

-- CreateTable
CREATE TABLE "conversations" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "conversations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "messages" (
    "id" TEXT NOT NULL,
    "conversationId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notifications" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "receiverId" TEXT NOT NULL,
    "issuerId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("id")
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
CREATE UNIQUE INDEX "languages_label_key" ON "languages"("label");

-- CreateIndex
CREATE UNIQUE INDEX "areas_label_key" ON "areas"("label");

-- CreateIndex
CREATE UNIQUE INDEX "tools_label_key" ON "tools"("label");

-- CreateIndex
CREATE UNIQUE INDEX "links_label_key" ON "links"("label");

-- CreateIndex
CREATE UNIQUE INDEX "bannedaccounts_email_key" ON "bannedaccounts"("email");

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_genderName_fkey" FOREIGN KEY ("genderName") REFERENCES "genders"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_paisLabel_fkey" FOREIGN KEY ("paisLabel") REFERENCES "paises"("label") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stars" ADD CONSTRAINT "stars_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stars" ADD CONSTRAINT "stars_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LanguageOfProject" ADD CONSTRAINT "LanguageOfProject_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LanguageOfProject" ADD CONSTRAINT "LanguageOfProject_languageLabel_fkey" FOREIGN KEY ("languageLabel") REFERENCES "languages"("label") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LanguageOfProfile" ADD CONSTRAINT "LanguageOfProfile_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LanguageOfProfile" ADD CONSTRAINT "LanguageOfProfile_languageLabel_fkey" FOREIGN KEY ("languageLabel") REFERENCES "languages"("label") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AreaofProfile" ADD CONSTRAINT "AreaofProfile_areaLabel_fkey" FOREIGN KEY ("areaLabel") REFERENCES "areas"("label") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AreaofProfile" ADD CONSTRAINT "AreaofProfile_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinksToProfile" ADD CONSTRAINT "LinksToProfile_username_fkey" FOREIGN KEY ("username") REFERENCES "links"("label") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinksToProfile" ADD CONSTRAINT "LinksToProfile_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AreaOfProject" ADD CONSTRAINT "AreaOfProject_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AreaOfProject" ADD CONSTRAINT "AreaOfProject_areaLabel_fkey" FOREIGN KEY ("areaLabel") REFERENCES "areas"("label") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToolOfProject" ADD CONSTRAINT "ToolOfProject_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToolOfProject" ADD CONSTRAINT "ToolOfProject_toolLabel_fkey" FOREIGN KEY ("toolLabel") REFERENCES "tools"("label") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToolofProfile" ADD CONSTRAINT "ToolofProfile_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToolofProfile" ADD CONSTRAINT "ToolofProfile_toolLabel_fkey" FOREIGN KEY ("toolLabel") REFERENCES "tools"("label") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commments" ADD CONSTRAINT "commments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commments" ADD CONSTRAINT "commments_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "follow" ADD CONSTRAINT "follow_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "follow" ADD CONSTRAINT "follow_followingId_fkey" FOREIGN KEY ("followingId") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "views" ADD CONSTRAINT "views_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "views" ADD CONSTRAINT "views_viewerName_fkey" FOREIGN KEY ("viewerName") REFERENCES "users"("userName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MemberToConversation" ADD CONSTRAINT "MemberToConversation_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MemberToConversation" ADD CONSTRAINT "MemberToConversation_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "conversations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "conversations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_issuerId_fkey" FOREIGN KEY ("issuerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
