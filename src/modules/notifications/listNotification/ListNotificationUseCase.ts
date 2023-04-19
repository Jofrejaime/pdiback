import { prisma } from "../../../prisma/clint";
import { Notification } from "@prisma/client";
class ListNotificationUseCase {
  async execute({
    issuerId,
    receiverId,
    content,
  }: any): Promise<Notification[]> {
    const Notifications = prisma.notification.findMany({});
    return Notifications;
  }
}
export { ListNotificationUseCase };
