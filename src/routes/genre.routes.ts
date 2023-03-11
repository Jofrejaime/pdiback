import { Router } from "express";
import { CreateGenreController } from "../modules/genres/useCases/createGender/CreateGenresController";
import { ListGenresController } from "../modules/genres/useCases/listGender/ListGenresControllers";

const createGenreController = new CreateGenreController();
const listGenresController = new ListGenresController();
const genreRoutes = Router()
genreRoutes.post('/', createGenreController.handle)
genreRoutes.get('/', listGenresController.handle)
export {genreRoutes}