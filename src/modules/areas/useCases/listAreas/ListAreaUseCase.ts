import { prisma } from "../../../../prisma/clint";
import { Area } from "@prisma/client";
class ListAreaUseCase {
  async execute(): Promise<Area[]> {
    
    const allAreas = await prisma.area.findMany({
     
    });
    return allAreas;
  }
}
export { ListAreaUseCase };
