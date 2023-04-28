import { prisma } from "../../../../prisma/clint";
import { User } from "@prisma/client";
class ListUsersUseCase {
  async execute(): Promise<User[]> {
    const allUsers = await prisma.user.findMany({
      orderBy: {
        userName: "asc",
      },
      include: {
        profile:{
          'include':{
            'AreaofProfile': true,
            'LanguageOfProfile':true,
            'Follow': true,
            '_count': true,
            'ToolofProfile': true,
          }
        },
        Star: true,
        projects: true,
        _count: true,
      },
    });
    return allUsers;
  }
}
export { ListUsersUseCase };
