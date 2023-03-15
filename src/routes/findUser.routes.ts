import { Router } from "express";
import { ensureAutenticated } from "../modules/middlewares/ensureAuthenticated";
import { FindUserController } from "../modules/users/useCases/findUser/FindUserController";
import { authenticateRoutes } from "./authenticate.routes";

const findedUser = new FindUserController();
const findRoutes = Router()
findRoutes.get('/', findedUser.handle)
export {findRoutes}