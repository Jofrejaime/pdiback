import {  ILanguageDTO } from '../../../dtos/ILanguageDTO';
import { prisma } from "../../../../prisma/clint";
import { Language } from "@prisma/client";
import { AppError } from '../../../../errors/AppErrors';
class CreateLanguageUseCase {
  async execute({
   label,
   icon_url
  }: ILanguageDTO): Promise<Language> {
    console.log(label)

     const languageAlreadyExists = await prisma.language.findUnique({
      where: {
           label
      },
    });
    if (languageAlreadyExists) {
      throw new AppError("Language Already Exists!");
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
