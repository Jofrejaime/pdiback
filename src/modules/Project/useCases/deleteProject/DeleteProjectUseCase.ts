import { prisma } from "../../../../prisma/clint";
import { Project } from "@prisma/client";
import { AppError } from "../../../../errors/AppErrors";

class DeleteProjectUseCase {
  async execute(id: string): Promise<Project> {
    
    const deleteLanguages = await prisma.languageOfProject.deleteMany(
      {'where':{
        'projectId': id
      }}
    )
    if(!deleteLanguages)
    throw new AppError('Language not deleted')
    const deleteAreas = await prisma.areaOfProject.deleteMany({'where':{
      'projectId': id
    }})
    if(!deleteAreas)
    throw new AppError('Areas not deleted')
    const deleteTools = await prisma.toolOfProject.deleteMany({'where':{
      'projectId': id
    }})
    if(!deleteTools)
    throw new AppError('Tools not deleted')
    
    const project = await prisma.project.delete({
      where: { id },
    });
    if (!project) {
      throw new AppError("Project not Exists");
    }
    return project;
  }
}
export { DeleteProjectUseCase };
