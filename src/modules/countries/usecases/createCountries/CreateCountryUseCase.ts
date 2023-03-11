import { ICrountryDTO } from "../../../dtos/ICreateCountries";
import { prisma } from "../../../../prisma/clint";
import { Pais } from "@prisma/client";
class CreateCountryUseCase {
  async execute({
    name,
    acronym1,
    acronym2,
    code,
  }: ICrountryDTO): Promise<Pais> {
    /*  const countryAlreadyExists = await prisma.Pais.findUnique({
      where: {
   
      },
    });
    if (countryAlreadyExists) {
      throw new Error("Country Already Exists!");
    }
*/
    const nacionality = await prisma.pais.create({
      data: {
        'label':name,
        acronym1,
        acronym2,
        code,
      },
    });
    return nacionality;
  }
}

export { CreateCountryUseCase };
