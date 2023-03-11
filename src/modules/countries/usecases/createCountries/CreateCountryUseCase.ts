import { ICrountryDTO } from "../../dtos/ICreateCountries";
import { prisma } from "../../../../prisma/clint";
import { Nationality } from "@prisma/client";
class CreateCountryUseCase {
  async execute({
    name,
    acronym1,
    acronym2,
    code,
  }: ICrountryDTO): Promise<Nationality> {
    /*  const countryAlreadyExists = await prisma.nationality.findUnique({
      where: {
   
      },
    });
    if (countryAlreadyExists) {
      throw new Error("Country Already Exists!");
    }
*/
    const nacionality = await prisma.nationality.create({
      data: {
        name,
        acronym1,
        acronym2,
        code,
      },
    });
    return nacionality;
  }
}

export { CreateCountryUseCase };
