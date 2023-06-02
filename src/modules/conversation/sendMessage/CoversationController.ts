import { Response, Request } from "express";
import { ConversationUseCase } from "./ConversationUseCase";
class ConversationController {
  async handle(request: Request, response: Response) {
    const {conversation} = request.params
    const {userId, content} = request.body;
  
    const c_conversation = new ConversationUseCase();
    const result = await c_conversation.execute({ userId,conversation, content });
   
    return response.status(201).json(result);
  }
}
export { ConversationController };
