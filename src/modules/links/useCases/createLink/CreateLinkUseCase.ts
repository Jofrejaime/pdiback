import { prisma } from "../../../../prisma/clint";
import { Link } from "@prisma/client";
import { AppError } from "../../../../errors/AppErrors";
class CreateLinkUseCase {
  async execute({ label, icon, url }: Link): Promise<Link> {
    console.log(label, icon, url)
   
    const link = await prisma.link.create({
      data: {
        url,
        label,
        icon,
      }
    });
    return link;
  }
}

export { CreateLinkUseCase };
