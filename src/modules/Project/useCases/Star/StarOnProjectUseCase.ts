import { IProjectDTO } from "../../../dtos/IProjectDTO";
import { prisma } from "../../../../prisma/clint";
import { Project, Star } from "@prisma/client";
import { compare } from "bcrypt";
class StarOnProjectUseCase {
  async execute({ id, userId }: any): Promise<Star[]|undefined> {
    const star = await prisma.star.findUnique({
      where: {
        userId_projectId: {
          projectId: id,
          userId: userId,
        },
      },
    });
    if (!star) {
   await prisma.star.create({
        data: {
          projectId: id,
          userId: userId,
        },
      });
     const project = await prisma.project.findUnique({
      'where':{id},
      'include':{Stars: true}
     })
      return project?.Stars;
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
        include: {
          Stars: true,
        },
      });

      return project.Stars;
    }
  }
}

export { StarOnProjectUseCase };
