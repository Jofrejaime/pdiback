import { ICrountryDTO } from "../../../dtos/ICreateCountries";
import { prisma } from "../../../../prisma/clint";
import { Pais } from "@prisma/client";
import { AppError } from "../../../../errors/AppErrors";
class CreateCountryUseCase {
  async execute({
    name,
    acronym1,
    acronym2,
    code,
  }: ICrountryDTO): Promise<Pais> {
     const countryAlreadyExists = await prisma.pais.findUnique({
      where: {
        label: name
      },
    });
    if (countryAlreadyExists) {
      throw new AppError("Country Already Exists!");
    }

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
