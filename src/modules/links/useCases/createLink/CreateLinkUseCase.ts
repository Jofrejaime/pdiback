import { ILinkDTO } from "../../../dtos/ILinkDTO";
import { prisma } from "../../../../prisma/clint";
import { Link } from "@prisma/client";
import { AppError } from "../../../../errors/AppErrors";
class CreateLinkUseCase {
  async execute({
    name,
    src,
    href
  }: ILinkDTO): Promise<Link> {
    const countryAlreadyExists = await prisma.link.findUnique({
      where: {
   name
      },
    });
    if (countryAlreadyExists) {
      throw new AppError("Link Already Exists!");
    }

    const link = await prisma.link.create({
      data: {
        name,
        src,
        href
      },
    });
    return link;
  }
}

export { CreateLinkUseCase };
