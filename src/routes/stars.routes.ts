import { Router } from "express";
import { ListStarController } from "../modules/Project/useCases/Star/listStars/ListStarController";

const starRoutes = Router()
const listStar = new ListStarController()
starRoutes.get('/', listStar.handle)
export {starRoutes}
