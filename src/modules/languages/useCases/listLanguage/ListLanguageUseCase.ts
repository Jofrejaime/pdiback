import { prisma } from "../../../../prisma/clint";
import {  Language } from "@prisma/client";
class ListLanguageUseCase {
  async execute(): Promise<Language[]> {
    
    const allLanguage = await prisma.language.findMany({
     
    });
    console.dir(allLanguage, { depth: null });
    return allLanguage;
  }
}
export { ListLanguageUseCase };
