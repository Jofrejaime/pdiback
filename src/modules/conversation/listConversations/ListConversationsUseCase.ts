import { prisma } from "../../../prisma/clint";
import { Conversation} from "@prisma/client";
class ListConversationsUseCase {
  async execute({
    member
  }: any): Promise<Conversation[]> {
    const Conversations = prisma.conversation.findMany({
      'where':{'MemberToConversation':{'some':{'memberId':member}},
    },
    'include':{'MemberToConversation':{'include':{'member':{'include':{'profile':true}}}}, 'Messages':{'include':{'issuer':{'include':{'profile':true}}}}}
    });
    return Conversations;
  }
}
export { ListConversationsUseCase };
