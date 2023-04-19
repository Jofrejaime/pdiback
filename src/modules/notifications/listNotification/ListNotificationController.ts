import { Response, Request } from "express";
import { ListNotificationUseCase } from "./ListNotificationUseCase";
class ListNotificationController {
  async handle(request: Request, response: Response) {
    const notifications = new ListNotificationUseCase();
    const result = await notifications.execute({});
    return response.status(201).json(result);
  }
}
export { ListNotificationController };
