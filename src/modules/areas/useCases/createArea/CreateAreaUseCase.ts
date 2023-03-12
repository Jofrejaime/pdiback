import { IAreaDTO } from "../../../dtos/IAreaDTO";
import { prisma } from "../../../../prisma/clint";
import { Area } from "@prisma/client";
class CreateAreaUseCase {
  async execute({
value,
   label,
   image_url
  }: IAreaDTO): Promise<Area> {
   const countryAlreadyExists = await prisma.area.findUnique({
      where: {
        label
      },
    });
    if (countryAlreadyExists) {
      throw new Error("Area Already Exists!");
    }

    const area = await prisma.area.create({
      data: {
        label,
        image_url
      },
    });
    return area;
  }
}

export { CreateAreaUseCase };
