import { Router } from "express";
import { ListNotificationController } from "../modules/notifications/listNotification/ListNotificationController";
import { NotificationUseCase } from "../modules/notifications/createNotification/NotificationUseCase";
import { ensureAutenticatedUser } from "../modules/middlewares/ensureAuthenticatedUser";
import { NotificationController } from "../modules/notifications/createNotification/NotificationController";
import { FindNotificationController } from "../modules/notifications/findNotifications/FindNotificationController";
const notificationRoutes = Router();

const listNofication = new ListNotificationController();
const createNotification = new NotificationController();
const findNotifications =  new FindNotificationController()
notificationRoutes.get("/", listNofication.handle);
notificationRoutes.post("/", ensureAutenticatedUser, createNotification.handle);
notificationRoutes.get('/:receiverId', ensureAutenticatedUser, findNotifications.handle)
export { notificationRoutes };
