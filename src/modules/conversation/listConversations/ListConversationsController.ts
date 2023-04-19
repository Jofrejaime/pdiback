import { Response, Request } from "express";
import { ListConversationsUseCase } from "./ListConversationsUseCase";
class ListConversationsController {
  async handle(request: Request, response: Response) {
    const {member}  = request.params
  
    const conversation = new ListConversationsUseCase();
    const result = await conversation.execute({member});
    return response.status(201).json(result);
  }
}
export { ListConversationsController };