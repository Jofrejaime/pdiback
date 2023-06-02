import { Denuncias } from "@prisma/client";
import { prisma } from "../../../prisma/clint";
import { AppError } from "../../../errors/AppErrors";

class CriarDenunciaUseCase {
  async execute({ projectId, content, id }: Denuncias): Promise<Denuncias> {
    const denuncia = await prisma.denuncias.create({
      data: { projectId, content },
    });
    if (!denuncia) throw new AppError("Alguma coisa deu errado na criação");
    return denuncia;
  }
}
export { CriarDenunciaUseCase };
