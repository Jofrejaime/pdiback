import { IProjectDTO } from "../../../dtos/IProjectDTO";
import { prisma } from "../../../../prisma/clint";
import { Project } from "@prisma/client";
import { AddLanguageOnProject } from "../../../languages/useCases/AddLanguage/AddLanguageOnProject";
import { AddAreaOnProject } from "../../../areas/useCases/addArea/AddAreaOnProject";
import { AddToolOnProject } from "../../../tools/useCases/AddTool/AddToolOnProject";
class CreateProjectUseCase {
  async execute({
    userId,
    title,
    description,
    respository_url,
    LanguageOfProject,
    projectRepository,
    AreaOfProject,
    ToolOfProject,
    files
  }: IProjectDTO): Promise<Project> {
    console.log(
      userId,
      title,
      description,
      respository_url,
      LanguageOfProject,
      projectRepository,
      AreaOfProject,
      ToolOfProject
    );

    const project = await prisma.project.create({
      data: {
        userId,
        title,
        description,
        respository_url,
        projectRepository,
        files
      },
    });
    if (project) {
      AddAreaOnProject(AreaOfProject, project);
      AddLanguageOnProject(LanguageOfProject, project);
      AddToolOnProject(ToolOfProject, project);
    }

    return project;
  }
}

export { CreateProjectUseCase };
