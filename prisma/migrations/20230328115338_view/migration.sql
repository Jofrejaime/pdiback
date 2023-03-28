-- CreateTable
CREATE TABLE "views" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "viewerName" TEXT NOT NULL,

    CONSTRAINT "views_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "views" ADD CONSTRAINT "views_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "views" ADD CONSTRAINT "views_viewerName_fkey" FOREIGN KEY ("viewerName") REFERENCES "users"("userName") ON DELETE RESTRICT ON UPDATE CASCADE;
