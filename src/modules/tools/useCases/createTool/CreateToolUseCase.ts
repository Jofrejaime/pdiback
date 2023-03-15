import {  IToolDTO } from "../../../dtos/IToolDTO";
import { prisma } from "../../../../prisma/clint";
import {  Tool } from "@prisma/client";
import { AppError } from "../../../../errors/AppErrors";
class CreateToolUseCase {
  async execute({
value,
   label,
   icon_url
  }: IToolDTO): Promise<Tool> {
      const countryAlreadyExists = await prisma.tool.findUnique({
      where: {
        label
      },
    });
    if (countryAlreadyExists) {
      throw new AppError("Country Already Exists!");
    }

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
