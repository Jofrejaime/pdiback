import { prisma } from "../../../../prisma/clint";
import { Project } from "@prisma/client";
import { AppError } from "../../../../errors/AppErrors";

class FindProjectUseCase {
  async execute(id: string | undefined): Promise<Project> {
    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        AreaOfProject: {
          orderBy: { areaLabel: "asc" },
          include: {
            Area: true,
          },
        },
        LanguageOfProject: {
          orderBy: { languageLabel: "asc" },
          include: {
            Language: true,
          },
        },
        ToolOfProject: {
          orderBy: { toolLabel: "asc" },
          include: {
            Toll: true,
          },
        },
        Comment: {
          include: {
            User: {
              include: {
                profile: true,
              },
            },
          },
        },
        Stars: true,
        user: {
          include: {
            profile: true,
          },
        },

        _count: true,
      },
    });
    if (!project) {
      throw new AppError("Project not Exists");
    }
    return project;
  }
}
export { FindProjectUseCase };
