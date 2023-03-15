import { Response, Request } from "express";
import { prisma } from "../../../../prisma/clint";
import { User } from "@prisma/client";
import { AppError } from "../../../../errors/AppErrors";

class FindUserUseCase {
  async execute(name: string | undefined): Promise<User[]> {
    const user = await prisma.user.findMany({
      where: { userName:{
        'startsWith': name
      } },
      include:{
        'profile': true,
        'Star': true,
      },
      'orderBy':{
        userName: 'asc'
      }
    });
    if (!user) {
      throw new AppError("User not Exists");
    }
    return user;
  }
}
export { FindUserUseCase };
