import { Denuncias } from "@prisma/client";
import { prisma } from "../../../prisma/clint";

class ListarDenunciasUseCase {
  async execute(): Promise<Denuncias[]> {
    return await prisma.denuncias.findMany();
  }
}
export { ListarDenunciasUseCase };
