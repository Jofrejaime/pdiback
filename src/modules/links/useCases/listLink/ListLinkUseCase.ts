import { prisma } from "../../../../prisma/clint";
import { Link } from "@prisma/client";
class ListLinkUseCase {
  async execute(): Promise<Link[]> {
    
    const allLinks = await prisma.link.findMany({
     
    });
    console.dir(allLinks, { depth: null });
    return allLinks;
  }
}
export { ListLinkUseCase };
