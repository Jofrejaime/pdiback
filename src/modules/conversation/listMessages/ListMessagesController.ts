import { Response, Request } from "express";
import { ListMessageUseCase } from "./ListMessagesUseCase";
class ListMessagesController {
  async handle(request: Request, response: Response) {
    const {id} = request.params
    const conversation = new ListMessageUseCase();
    const result = await conversation.execute({id});
    return response.status(201).json(result);
  }
}
export { ListMessagesController };
