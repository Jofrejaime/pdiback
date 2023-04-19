import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { ListUsersController } from "../modules/users/useCases/listUsers/ListUsersControllers";
import multer from "multer";
import { storage } from "../utilities/multerConfig";;
import { FindUserController } from "../modules/users/useCases/findUser/FindUserController";
import { FollowUserController } from "../modules/users/useCases/follow/Star/FollowUserController";
const listUsers = new ListUsersController();
const findedUser = new FindUserController()
const createUserController = new CreateUserController();
const followUser = new FollowUserController()
const upload = multer({ storage: storage});
const userRoutes = Router();
userRoutes.post("/", upload.single('file'), createUserController.handle);
userRoutes.get("/", listUsers.handle);
userRoutes.post("/follow", followUser.handle)
userRoutes.get('/:name', findedUser.handle)
export {userRoutes};
