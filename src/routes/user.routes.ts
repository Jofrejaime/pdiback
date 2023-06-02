import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { ListUsersController } from "../modules/users/useCases/listUsers/ListUsersControllers";
import multer from "multer";
import { storage } from "../utilities/multerConfig";;
import { FindUserController } from "../modules/users/useCases/findUser/FindUserController";
import { FollowUserController } from "../modules/users/useCases/follow/Star/FollowUserController";
import UpdateUserController from "../modules/users/useCases/updateUser/UpdateUserController";
import UpdateImageController from "../modules/users/useCases/updateImage/UpdateImageController";
import { DeleteUserController } from "../modules/users/useCases/deleteUser/DeleteUserController";
const listUsers = new ListUsersController();
const findedUser = new FindUserController()
const createUserController = new CreateUserController();
const followUser = new FollowUserController()
const updateUser = new UpdateUserController()
const updatePhoto =  new UpdateImageController()
const deleteUser = new DeleteUserController()
const upload = multer({ storage: storage});
const userRoutes = Router();
userRoutes.post("/", createUserController.handle);
userRoutes.get("/", listUsers.handle);
userRoutes.post("/follow", followUser.handle)
userRoutes.get('/:name', findedUser.handle)
userRoutes.post('/update/:id', upload.single('file'), updateUser.handle)
userRoutes.patch('/update/img/:id', upload.single('file'), updatePhoto.handle)
userRoutes.delete('/:id', deleteUser.handle)
export {userRoutes};
