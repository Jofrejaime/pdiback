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
    repository,
    LanguageOfProject,
    AreaOfProject,
    ToolOfProject,
    files
  }: IProjectDTO): Promise<Project> {
    console.log(
      userId,
      title,
      description,
      repository,
      LanguageOfProject,
      AreaOfProject,
      ToolOfProject
    );

    const project = await prisma.project.create({
      data: {
        userId,
        title,
        description,
        repository,
        files
      },
    });
    if (project) {
      AddAreaOnProject(AreaOfProject, project);
      AddLanguageOnProject(LanguageOfProject, project);
      AddToolOnProject(ToolOfProject, project);
    }
    console.log(project, ' criou o projecto')
    return project;
  }
}

export { CreateProjectUseCase };
