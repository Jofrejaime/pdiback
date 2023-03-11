import { Response, Request } from "express";
import { prisma } from "../../../../prisma/clint";
import { User } from "@prisma/client";

class FindUserUseCase {
  async execute(name: string | undefined): Promise<User[]> {
    const user = await prisma.user.findMany({
      where: { userName: name },
      include:{
        'profile': true
      }
    });
    if (!user) {
      throw new Error("User not Exists");
    }
    return user;
  }
}
export { FindUserUseCase };
