import { ILinkDTO } from "../../dtos/ILinkDTO";
import { prisma } from "../../../../prisma/clint";
import { Link } from "@prisma/client";
class CreateLinkUseCase {
  async execute({
    name,
    src,
    href
  }: ILinkDTO): Promise<Link> {
    /*  const countryAlreadyExists = await prisma.nationality.findUnique({
      where: {
   
      },
    });
    if (countryAlreadyExists) {
      throw new Error("Country Already Exists!");
    }
*/
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
