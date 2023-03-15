import { IAreaDTO } from "../../../dtos/IAreaDTO";
import { prisma } from "../../../../prisma/clint";
import { Area } from "@prisma/client";
import { AppError } from "../../../../errors/AppErrors";
class CreateAreaUseCase {
  async execute({
value,
   label,
   image_url
  }: IAreaDTO): Promise<Area> {
   const areaAlreadyExists = await prisma.area.findUnique({
      where: {
        label
      },
    });
    if (areaAlreadyExists) {
      throw new AppError("Area Already Exists!", );
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
