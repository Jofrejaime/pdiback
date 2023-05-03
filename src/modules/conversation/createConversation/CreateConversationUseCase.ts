import { prisma } from "../../../prisma/clint";
import { Conversation, MemberToConversation } from "@prisma/client";
class CreateConversationUseCase {
  async execute(members: any): Promise<Conversation[] | Conversation> {
    const conversation1 = await prisma.conversation.findMany({
      where: { MemberToConversation: { some: members[1] }, 'AND': {'MemberToConversation':{some:members[0]}} }
    });
    if (conversation1.length===0){
      const conversation = await prisma.conversation.create({data:{'MemberToConversation':{'createMany':{'data':members}}}});
      return conversation
      }
      else 
        return conversation1;
      }
  }
  
export { CreateConversationUseCase };
