import { Router } from "express";
import multer from "multer";
import { CreateLinkController } from "../modules/links/useCases/createLink/CreateLinkComtroller";
import { ListLinkController } from "../modules/links/useCases/listLink/ListLinkControllers";
import { storage } from "../utilities/multerConfig";

const linkRoutes = Router();
const createLink = new CreateLinkController()
const listLinks = new ListLinkController();
const upload = multer({ storage: storage});
linkRoutes.post('/', upload.single('file'), createLink.handle);
linkRoutes.get('/', listLinks.handle);
export {linkRoutes}