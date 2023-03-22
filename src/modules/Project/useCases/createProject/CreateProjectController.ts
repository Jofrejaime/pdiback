import { Response, Request } from "express";
import { AppError } from "../../../../errors/AppErrors";
import { prisma } from "../../../../prisma/clint";
import { moveFile } from "../../../../utilities/moveFiles";
import { CreateProjectUseCase } from "./CreateProjectUseCase";
class CreateProjectController {
  async handle(request: Request, response: Response) {
        const file = request?.file;
    const {    userId,userName,  title,   description,  respository_url,   LanguageOfProject,    projectRepository,  AreaOfProject,    ToolOfProject,   } = request.body;
    console.log(request.body)
    const createProject = new CreateProjectUseCase();
  const user = prisma.user.findUnique({
    where:{userName: userName}
  })
  let files;
  if(!user){
    throw new AppError('User not Exists')
  }
   
   files = moveFile(file, userName, false, title) 

          
    const result = await createProject.execute({
      userId,  title,   description,  respository_url,   LanguageOfProject,  projectRepository,  AreaOfProject,    ToolOfProject, files});
    return response.status(201).json(result);
  }
}
export { CreateProjectController };
