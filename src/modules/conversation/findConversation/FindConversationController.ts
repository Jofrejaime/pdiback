import { Response, Request } from "express";
import { FindConversationsUseCase } from "./FindConversationUseCase";
class FindConversationsController {
  async handle(request: Request, response: Response) {
    const {id} = request.params
    const conversations = new FindConversationsUseCase();
    const result = await conversations.execute({id});
    return response.status(201).json(result);
  }
}
export { FindConversationsController };