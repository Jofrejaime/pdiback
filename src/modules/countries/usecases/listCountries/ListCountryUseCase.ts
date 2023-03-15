import { prisma } from "../../../../prisma/clint";
import { Pais } from "@prisma/client";
class ListCountryUseCase {
  async execute(): Promise<Pais[]> {
    
    const allCountries = await prisma.pais.findMany({  
      'orderBy':{
        label: 'asc'
      }
       });
    console.dir(allCountries, { depth: null });
    return allCountries;
  }
}
export { ListCountryUseCase };
