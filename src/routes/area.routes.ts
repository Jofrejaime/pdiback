import { Router } from "express";
import multer from "multer";
import { CreateAreaController } from "../modules/areas/useCases/createArea/CreateAreaComtroller";
import { ListAreasController } from "../modules/areas/useCases/listAreas/ListAreasControllers";
import { storage } from "../utilities/multerConfig";
const areaRoutes = Router();
const createArea = new CreateAreaController()
const listAreas = new ListAreasController();
const upload = multer({ storage: storage});
areaRoutes.post('/', upload.single('file'), createArea.handle);
areaRoutes.get('/', listAreas.handle);
export {areaRoutes}