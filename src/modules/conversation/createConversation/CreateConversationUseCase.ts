import { prisma } from "../../../prisma/clint";
import { Conversation, MemberToConversation } from "@prisma/client";
class CreateConversationUseCase {
  async execute(members: any): Promise<Conversation[] | undefined> {


    const conversation1 = await prisma.conversation.findMany({
      where: { MemberToConversation: { some: { memberId: members[0] } } }
      ,
      include:{'MemberToConversation':true}
    });

    if (!conversation1) 
    console.log('Eles nunca conversaram')
    else {
 const c = conversation1.some(c => c.MemberToConversation.some(m => m.memberId === members[1]))
     if(!c)
      {
        const conversation = await prisma.conversation.create({ data: {} });

        members.map(
          async (member: any) =>
            await prisma.memberToConversation.create({
              data: { conversationId: conversation.id, memberId: member },
            })
        );
        return conversation1;
      }
  }
  }
}
export { CreateConversationUseCase };
