
import { prisma } from "../../../../prisma/clint";
import { Gender } from "@prisma/client";
class ListGenresUseCase {
  async execute(): Promise<Gender[]>{ 
    const allGenres = await prisma.gender.findMany({
      include:{
        Profile: true
      }
    });
    console.dir(allGenres, { depth: null });
    return allGenres;
  }
}
export { ListGenresUseCase };
