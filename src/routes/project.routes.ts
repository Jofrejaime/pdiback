import { Router } from "express";
import multer from "multer";
import { CreateProjectController } from "../modules/Project/useCases/createProject/CreateProjectController";
import { storage } from "../utilities/multerConfig";


const upload = multer({ storage: storage});

const projectRoutes = Router();
const createProject = new  CreateProjectController();
projectRoutes.post('/', upload.single('file'), createProject.handle)

export {projectRoutes};