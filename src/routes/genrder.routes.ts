import { Router } from "express";
import { CreateGenderController } from "../modules/genres/useCases/createGender/CreateGendersController";
import { ListGendersController } from "../modules/genres/useCases/listGender/ListGendersControllers";

const createGenderController = new CreateGenderController();
const listGendersController = new ListGendersController();
const genderRoutes = Router()
genderRoutes.post('/', createGenderController.handle)
genderRoutes.get('/', listGendersController.handle)
export {genderRoutes}