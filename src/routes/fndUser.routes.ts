import { Router } from "express";
import { FindUserController } from "../modules/users/useCases/findUser/FindUserController";

const findedUser = new FindUserController();
const findRoutes = Router()
findRoutes.get('/', findedUser.handle)

export {findRoutes}