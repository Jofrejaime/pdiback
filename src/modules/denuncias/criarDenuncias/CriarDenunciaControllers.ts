import { Response, Request } from "express";
import { CriarDenunciaUseCase } from "./CriarDenunciasUseCase";
class CriarDenunciaController {
  async handle(request: Request, response: Response) {
    const { projectId, content, id } = request.body;
    console.log(projectId, content, id);
    const criarDenuncia = new CriarDenunciaUseCase();
    const result = await criarDenuncia.execute({
      projectId,
      content,
      id,
    });
    return response.status(201).json(result);
  }
}
export { CriarDenunciaController };
