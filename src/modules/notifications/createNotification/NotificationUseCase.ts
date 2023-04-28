import { prisma } from "../../../prisma/clint";
import { Notification } from "@prisma/client";
class NotificationUseCase {
  async execute({ issuerId, receiverId, content }: any): Promise<Notification | Notification[]> {
    const notification = await prisma.notification.findMany({'where':{
      issuerId,
      receiverId,
      content
    }})
    if(notification.length>0)
    return notification
    else{
    const Notification = prisma.notification.create({
      data: {
        receiverId,
        content,
        issuerId,
      },
    });
    return Notification;
  }}
}
export { NotificationUseCase };
