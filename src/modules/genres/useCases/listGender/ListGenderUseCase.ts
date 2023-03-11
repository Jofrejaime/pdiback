import { prisma } from "../../../../prisma/clint";
import { Gender } from "@prisma/client";
class ListGenderUseCase {
  async execute(): Promise<Gender[]>{ 
    const allGenders = await prisma.gender.findMany({
      include:{
        Profile: true
      }
    });
    console.dir(allGenders, { depth: null });
    return allGenders;
  }
}
export { ListGenderUseCase };
