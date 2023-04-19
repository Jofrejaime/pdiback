import { prisma } from "../../../prisma/clint";
import { Message, Notification } from "@prisma/client";
class ListMessageUseCase {
  async execute({
   id
  }: any): Promise<Message[]> {
    const Messages = prisma.message.findMany({'where':{'conversationId':id}
  ,
'include':{'issuer':{'include':{'profile':true}}, 'conversation':{'include':{'MemberToConversation':{'include':{'member':{'include':{'profile':true}}}}}}}});
    return Messages;
  }
}
export { ListMessageUseCase };
