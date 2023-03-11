import { prisma } from "../../../../prisma/clint";
import { Area } from "@prisma/client";
class ListAreaUseCase {
  async execute(): Promise<Area[]> {
    
    const allAreas = await prisma.area.findMany({
     
    });
    console.dir(allAreas, { depth: null });
    return allAreas;
  }
}
export { ListAreaUseCase };
