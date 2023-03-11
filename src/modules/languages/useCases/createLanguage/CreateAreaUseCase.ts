import {  ILanguageDTO } from '../../../dtos/ILanguageDTO';
import { prisma } from "../../../../prisma/clint";
import { Language } from "@prisma/client";
class CreateLanguageUseCase {
  async execute({
value,
   label,
   icon_url
  }: ILanguageDTO): Promise<Language> {
     const countryAlreadyExists = await prisma.area.findUnique({
      where: {
          label
      },
    });
    if (countryAlreadyExists) {
      throw new Error("Country Already Exists!");
    }
    const language = await prisma.language.create({
      data: {
        label,
        icon_url
      },
    });
    return language;
  }
}

export { CreateLanguageUseCase };
