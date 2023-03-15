import { ensureAutenticated } from "../modules/middlewares/ensureAuthenticated";
import { Router } from "express";
const ensureRoutes= Router();

ensureRoutes.get('/userT', ensureAutenticated)
export {ensureRoutes}