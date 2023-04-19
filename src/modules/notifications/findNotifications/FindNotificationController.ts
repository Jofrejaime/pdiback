import { Response, Request } from "express";
import { FindNotificationUseCase } from "./FindNotificationUseCase";
class FindNotificationController {
  async handle(request: Request, response: Response) {
    const {receiverId} = request.params
    const notifications = new FindNotificationUseCase();
    const result = await notifications.execute({receiverId});
    return response.status(201).json(result);
  }
}
export { FindNotificationController };
