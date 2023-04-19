import { prisma } from "../../../prisma/clint";
import { Notification } from "@prisma/client";
class NotificationUseCase {
  async execute({ issuerId, receiverId, content }: any): Promise<Notification> {
    const Notification = prisma.notification.create({
      data: {
        receiverId,
        content,
        issuerId,
      },
    });
    return Notification;
  }
}
export { NotificationUseCase };
