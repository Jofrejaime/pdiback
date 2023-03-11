import {  IToolDTO } from "../../dtos/IToolDTO";
import { prisma } from "../../../../prisma/clint";
import {  Tool } from "@prisma/client";
class CreateToolUseCase {
  async execute({
value,
   label,
   icon_url
  }: IToolDTO): Promise<Tool> {
    /*  const countryAlreadyExists = await prisma.nationality.findUnique({
      where: {
   
      },
    });
    if (countryAlreadyExists) {
      throw new Error("Country Already Exists!");
    }
*/
    const tool = await prisma.tool.create({
      data: {
        label,
        icon_url
      },
    });
    return tool;
  }
}

export { CreateToolUseCase };
