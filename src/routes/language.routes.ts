import { Router } from "express";
import multer from "multer";
import { CreateLanguageController } from "../modules/languages/useCases/createLanguage/CreateLanguageComtroller";
import { ListLanguageController } from "../modules/languages/useCases/listLanguage/ListAreasControllers";
import { storage } from "../utilities/multerConfig";
const languageRoutes = Router();
const createLanguage = new CreateLanguageController()
const listLanguage = new ListLanguageController();
const upload = multer({ storage: storage});

languageRoutes.post('/',upload.single('file'), createLanguage.handle);
languageRoutes.get('/', listLanguage.handle);
export {languageRoutes}