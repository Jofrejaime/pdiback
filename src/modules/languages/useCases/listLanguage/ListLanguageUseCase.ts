import { prisma } from "../../../../prisma/clint";
import {  Language } from "@prisma/client";
class ListLanguageUseCase {
  async execute(): Promise<Language[]> {
    
    const allLanguage = await prisma.language.findMany({
    });
    return allLanguage;
  }
}
export { ListLanguageUseCase };
