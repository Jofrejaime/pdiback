import { IProjectDTO } from "../../../dtos/IProjectDTO";
import { prisma } from "../../../../prisma/clint";
import { Project } from "@prisma/client";
class StarOnProjectUseCase {
  async execute({ id, userId }: any): Promise<Project> {
    const star = await prisma.star.findUnique({
      where: {
        userId_projectId: {
          projectId: id,
          userId: userId,
        },
      },
    });
    if (!star) {
      const project = await prisma.project.update({
        where: { id },
        data: {
          Stars: {
            create: {
              userId,
            },
          },
        },
        include: {
          Stars: true,
        },
      });
      
    return project;
    } else {
      const project = await prisma.project.update({
        where: { id },
        data: {
          Stars: {
            delete: {
              userId_projectId: {
                projectId: id,
                userId: userId,
              },
            },
          },
        },
      });
      
    return project;
    }

  }
}

export { StarOnProjectUseCase };
