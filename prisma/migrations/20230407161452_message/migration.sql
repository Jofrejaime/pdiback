-- CreateTable
CREATE TABLE "conversations" (
    "id" TEXT NOT NULL,
    "issuerId" TEXT NOT NULL,

    CONSTRAINT "conversations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "conversations" ADD CONSTRAINT "conversations_issuerId_fkey" FOREIGN KEY ("issuerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
