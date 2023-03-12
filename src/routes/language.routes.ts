import { Router } from "express";
import { CreateLanguageController } from "../modules/languages/useCases/createLanguage/CreateLanguageComtroller";
import { ListLanguageController } from "../modules/languages/useCases/listLanguage/ListAreasControllers";
const languageRoutes = Router();
const createLanguage = new CreateLanguageController()
const listLanguage = new ListLanguageController();
languageRoutes.post('/', createLanguage.handle);
languageRoutes.get('/', listLanguage.handle);
export {languageRoutes}