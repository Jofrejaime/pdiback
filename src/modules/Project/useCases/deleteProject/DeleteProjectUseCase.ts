import { prisma } from "../../../../prisma/clint";
import { Project } from "@prisma/client";
import { AppError } from "../../../../errors/AppErrors";

class DeleteProjectUseCase {
  async execute(id: string): Promise<Project> {

    const findedProject = await prisma.project.findUnique({'where':{id}})
    if(!findedProject)
    throw new AppError('Project not existis')
    else{
    const deleteLanguages = await prisma.languageOfProject.deleteMany(
      {'where':{
       'Project': findedProject
      }}
    )
    if(!deleteLanguages)
    throw new AppError('Language not deleted')
    const deleteAreas = await prisma.areaOfProject.deleteMany({'where':{
      'Project': findedProject
    }})
    
    if(!deleteAreas)
    throw new AppError('Areas not deleted')
    const deleteTools = await prisma.toolOfProject.deleteMany({'where':{
      'projectId': id
    }})
    if(!deleteTools)
    throw new AppError('Tools not deleted')
    
    const comments = await prisma.comment.deleteMany({where:{'projectId': id}})
    const views = await prisma.view.deleteMany({'where':{'projectId': id}})
    const stars = await prisma.star.deleteMany({'where':{'projectId': id}})
   
    const project = await prisma.project.delete({'where':{id}})

    if (!project) {
      throw new AppError("Project not Exists");
      console.log('aqio')
    }
    
    console.log(id, project, findedProject, )
    return project;
  }}
}
export { DeleteProjectUseCase };
