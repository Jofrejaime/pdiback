import { Response, Request } from "express";
import { prisma } from "../../../../prisma/clint";
import { User } from "@prisma/client";
class ListUsersUseCase {
  async execute(): Promise<User[]> {
    const allUsers = await prisma.user.findMany({
      orderBy: {
        userName: "asc",
      },
      include: {
        profile: true,
        Star: true,
        projects: true,
      },
    });
    return allUsers;
  }
}
export { ListUsersUseCase };
