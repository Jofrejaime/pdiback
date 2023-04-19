import { prisma } from "../../../prisma/clint";
import { Notification } from "@prisma/client";
class FindNotificationUseCase {
  async execute({
    receiverId,
  }: any): Promise<Notification[]> {
    const Notifications = prisma.notification.findMany({
      'where':{
        receiverId
      },
      'include':{
       'issuer':{'include':{'profile':true}}
      }
    });
    return Notifications;
  }
}
export { FindNotificationUseCase };
