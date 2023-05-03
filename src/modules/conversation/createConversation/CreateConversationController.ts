import { Response, Request } from "express";
import { CreateConversationUseCase } from "./CreateConversationUseCase";
class CreateConversationController {
  async handle(request: Request, response: Response) {
   
    const conversation = new CreateConversationUseCase();
    const result = await conversation.execute(request.body);
    return response.status(201).json(result);
  }
} 
export {CreateConversationController}