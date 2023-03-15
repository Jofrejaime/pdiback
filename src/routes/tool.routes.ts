import { Router } from "express";
import multer from "multer";
import { CreateToolController } from "../modules/tools/useCases/createTool/CreateToolComtroller";
import { ListToolController } from "../modules/tools/useCases/listTool/ListToolControllers";
import { storage } from "../utilities/multerConfig";

const toolRoutes = Router();
const createTool = new CreateToolController();
const listTool = new ListToolController();
const upload = multer({ storage: storage });

toolRoutes.post("/", upload.single("file"), createTool.handle);
toolRoutes.get("/", listTool.handle);
export { toolRoutes };
