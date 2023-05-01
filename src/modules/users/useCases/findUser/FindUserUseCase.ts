import { Response, Request } from "express";
import { prisma } from "../../../../prisma/clint";
import { User } from "@prisma/client";
import { AppError } from "../../../../errors/AppErrors";

class FindUserUseCase {
  async execute(name: string | undefined): Promise<User> {
    const user = await prisma.user.findUnique({
      where: { userName: name },
      include: {
        _count: true,
        Following: { include: { Follower: true } },
        projects: true,
        profile: {
          include: {
            LanguageOfProfile: { include: { Language: true } },
            LinksToProfile:{'include':{'Link':true}},
            AreaofProfile: {
              include: { Area: true },
            },
            ToolofProfile: { include: { Tool: true } },
            Pais: true,
            _count: true,
            Follow: {
              include: {
                Following: {
                  include: {
                    User: {
                      include: {
                        projects: {
                          include: {
                            _count: true,
                            Stars: true,
                            user: true,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        Star: true,
      },
    });
    if (!user) {
      throw new AppError("User not Exists");
    }
    return user;
  }
}
export { FindUserUseCase };
