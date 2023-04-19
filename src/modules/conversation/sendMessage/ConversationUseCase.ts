import { prisma } from "../../../prisma/clint";
import {  Message} from "@prisma/client";
import { AppError } from "../../../errors/AppErrors";
class ConversationUseCase {
  async execute({ conversation, userId, content }: any): Promise<Message > {
    const coversation = await prisma.conversation.findUnique({
      'where':{'id': conversation}
    })
    if(!coversation)
       throw new  AppError('Esta conversa não existe')
    
      const Message = await prisma.message.create({
        'data':{'conversationId':conversation, 'content': content, 'userId': userId}
      })
    return Message
    }
}
export {ConversationUseCase}