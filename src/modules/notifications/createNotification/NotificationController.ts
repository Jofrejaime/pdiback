import { Response, Request } from "express";
import { NotificationUseCase } from "./NotificationUseCase";
class NotificationController {
  async handle(request: Request, response: Response) {
    const {issuerId, receiverId, content} = request.body;
    const conversation = new NotificationUseCase();
    const result = await conversation.execute({issuerId, receiverId, content  });
    return response.status(201).json(result);
  }
}
export { NotificationController };
