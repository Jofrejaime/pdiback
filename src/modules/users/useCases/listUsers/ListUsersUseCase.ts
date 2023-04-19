import { prisma } from "../../../../prisma/clint";
import { User } from "@prisma/client";
class ListUsersUseCase {
  async execute(): Promise<User[]> {
    const allUsers = await prisma.user.findMany({
      orderBy: {
        userName: "asc",
      },
      include: {
        profile: {
          include: {
            _count: true,
            'Follow': true,
            ToolofProfile: true,
            LanguageOfProfile: true,
            Pais: true,
            'AreaofProfile': true
          },
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
