-- CreateTable
CREATE TABLE "Denuncias" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Denuncias_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Denuncias" ADD CONSTRAINT "Denuncias_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
