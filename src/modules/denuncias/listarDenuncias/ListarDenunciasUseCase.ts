import { Denuncias } from "@prisma/client";
import { prisma } from "../../../prisma/clint";

class ListarDenunciasUseCase {
  async execute(): Promise<Denuncias[]> {
    const listarDenuncias = await prisma.denuncias.findMany();
    return listarDenuncias;
  }
}
export { ListarDenunciasUseCase };
