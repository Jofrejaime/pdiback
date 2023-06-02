import { Denuncias } from "@prisma/client";
import { prisma } from "../../../prisma/clint";

class EliminarDenunciaUseCase {
  async execute({ id }: any): Promise<Denuncias> {
    const eliminarDenuncia = await prisma.denuncias.delete({ where: { id } });
    return eliminarDenuncia;
  }
}
export { EliminarDenunciaUseCase };
