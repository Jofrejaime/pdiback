import { Router } from "express";
import multer from "multer";
import { CreateProjectController } from "../modules/Project/useCases/createProject/CreateProjectController";
import { FindProjectController } from "../modules/Project/useCases/findProject/FindProjectController";
import { ListProjectController } from "../modules/Project/useCases/ListProject/ListProjectController";
import { storage } from "../utilities/multerConfig";
import { ensureAutenticatedUser } from "../modules/middlewares/ensureAuthenticatedUser";
import { DeleteProjectController } from "../modules/Project/useCases/deleteProject/DeleteProjectController";
import { StarOnProjectController } from "../modules/Project/useCases/Star/StarOnProjectController";
import { CommentOnProjectController } from "../modules/Project/useCases/Comment/CommentOnProjectController";
import { ViewOnProjectController } from "../modules/Project/useCases/View/ViewOnProjectController";
import { Top10UsersController } from "../modules/users/useCases/top10/Top10UsersControllers";
import { FindProjectFeedController } from "../modules/Project/useCases/findProjectFeed/FindProjectFeedController";


const upload = multer({ storage: storage});

const projectRoutes = Router();
const createProject = new  CreateProjectController();
const findProject = new FindProjectController()
const listProject = new ListProjectController();
const deleteProject = new DeleteProjectController();
const starOnProject = new StarOnProjectController()
const commentOnProject = new CommentOnProjectController()
const viewOnProject = new ViewOnProjectController()
const top10 = new Top10UsersController()
const findProjectFeed = new FindProjectFeedController()
projectRoutes.post('/', upload.single('file'), createProject.handle)
projectRoutes.post('/get', listProject.handle)
projectRoutes.get('/:id', findProject.handle)
projectRoutes.delete('/:id', ensureAutenticatedUser,deleteProject.handle)
projectRoutes.get('/', listProject.handle)
projectRoutes.patch('/star/:userId&:id',ensureAutenticatedUser,starOnProject.handle)
projectRoutes.post('/comment/:id&:userId&:comment', ensureAutenticatedUser,commentOnProject.handle)
projectRoutes.post('/view/:viewerName&:projectId', ensureAutenticatedUser, viewOnProject.handle)
projectRoutes.get('/top/10', top10.handle)
projectRoutes.get('/find/where/:follower', ensureAutenticatedUser, findProjectFeed.handle)
export {projectRoutes};
