import { create } from "domain";
import { Response, Request } from "express";
import { AppError } from "../../../../errors/AppErrors";
import { prisma } from "../../../../prisma/clint";
import { createDir } from "../../../../utilities/createDir";
import { moveFile } from "../../../../utilities/moveFiles";
import { CreateProjectUseCase } from "./CreateProjectUseCase";
class CreateProjectController {
  async handle(request: Request, response: Response) {
    const file = request?.file;
    const {
      userId,
      userName,
      title,
      description,
      repository,
      LanguageOfProject,
      AreaOfProject,
      ToolOfProject,
    } = request.body;
    const createProject = new CreateProjectUseCase();
    const user = prisma.user.findUnique({
      where: { userName: userName },
    });
    let files;
    if (!user) {
      throw new AppError("User not Exists");
    }
    if (!userId && file) {
      files = moveFile(file, userName, false, title);
      return response.status(202).json(files);
    }
    else if(userId){
      console.log('criando projecto...')
     files = createDir(`users/${userName}/projects/${title}`);
    const result = await createProject.execute({
      userId,
      title,
      description,
      LanguageOfProject,
      repository,
      AreaOfProject,
      ToolOfProject,
      files,
    });
    return response.status(201).json(result); 
    }
    return response.status(400).json({message: 'Nenhum projecto criado'})
    
  }
}
export { CreateProjectController };
