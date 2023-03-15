import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { ListUsersController } from "../modules/users/useCases/listUsers/ListUsersControllers";
import multer from "multer";
import { storage } from "../utilities/multerConfig";
const listUsers = new ListUsersController();
const createUserController = new CreateUserController();
const upload = multer({ storage: storage});
const userRoutes = Router();

userRoutes.post("/", upload.single('file'), createUserController.handle);
userRoutes.get("/", listUsers.handle);
export {userRoutes};
