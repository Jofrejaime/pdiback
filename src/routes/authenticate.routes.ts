import { Router } from "express";
import { ensureAutenticated } from "../modules/middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "../modules/users/useCases/AuthenticateUser/AuthenticateUserController";
const authenticateRoutes= Router();
const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post('/session', authenticateUserController.handle)
export {authenticateRoutes}