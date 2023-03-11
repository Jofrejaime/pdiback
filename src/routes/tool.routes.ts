import { Router } from "express";
import { CreateToolController } from "../modules/tools/useCases/createTool/CreateToolComtroller";
import { ListToolController } from "../modules/tools/useCases/listTool/ListToolControllers";

const toolRoutes = Router();
const createTool = new CreateToolController()
const listTool = new ListToolController();
toolRoutes.post('/', createTool.handle);
toolRoutes.get('/', listTool.handle);
export {toolRoutes}