-- CreateTable
CREATE TABLE "MemberToConversation" (
    "memberId" TEXT NOT NULL,
    "conversationId" TEXT NOT NULL,

    CONSTRAINT "MemberToConversation_pkey" PRIMARY KEY ("memberId","conversationId")
);

-- AddForeignKey
ALTER TABLE "MemberToConversation" ADD CONSTRAINT "MemberToConversation_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MemberToConversation" ADD CONSTRAINT "MemberToConversation_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "conversations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
