import { prisma } from "../../../prisma/clint";
import { Conversation} from "@prisma/client";
class FindConversationsUseCase {
  async execute({
 id
  }: any): Promise<Conversation[]> {
    const Conversations = prisma.conversation.findMany({'where':{id}, 'include':{
      'Messages':{'orderBy':{'created_at':'desc'},'include':{'issuer':{'include':{'profile':true}}}},
      'MemberToConversation':{'include':{'member':{'include':{'profile':true, }}}}
    }});
    return Conversations;
  }
}
export { FindConversationsUseCase };
