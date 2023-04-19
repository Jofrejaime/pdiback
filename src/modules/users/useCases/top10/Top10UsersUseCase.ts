import { Response, Request } from "express";
import { prisma } from "../../../../prisma/clint";
import { Project, User } from "@prisma/client";
class Top10UsersUseCase {
  async execute(): Promise<Project[]> {
    const allUsers = await prisma.project.findMany({
      orderBy: { Stars: { _count: "desc", }, },
      include: {
        user: { include: { profile: {'include':{'AreaofProfile':{orderBy: {'areaLabel': 'desc'}}}}} },
        _count: true,
        AreaOfProject: true,
        ToolOfProject: true,
        LanguageOfProject: true,
      },
      take: 10,
    });

    return allUsers;
  }
}
export { Top10UsersUseCase };
