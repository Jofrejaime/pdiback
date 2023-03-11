import { Router } from "express";
import { CreateAreaController } from "../modules/areas/useCases/createArea/CreateAreaComtroller";
import { ListAreasController } from "../modules/areas/useCases/listAreas/ListAreasControllers";
const areaRoutes = Router();
const createArea = new CreateAreaController()
const listAreas = new ListAreasController();
areaRoutes.post('/', createArea.handle);
areaRoutes.get('/', listAreas.handle);
export {areaRoutes}