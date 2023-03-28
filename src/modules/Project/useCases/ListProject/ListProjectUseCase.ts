import { prisma } from "../../../../prisma/clint";
import { Project } from "@prisma/client";
class ListProjectUseCase {
  async execute(): Promise<Project[]> {
    const allProject = await prisma.project.findMany({
      include: {
        AreaOfProject: true,
        LanguageOfProject: true,
        Stars: true,
        ToolOfProject: true,
        Comment: {
          include: {
            User: {
              include: {
                profile: true,
              },
            },
          },
        },
        user: {
          include: {
            profile: true,
          },
        },
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return allProject;
  }
}
export { ListProjectUseCase };
