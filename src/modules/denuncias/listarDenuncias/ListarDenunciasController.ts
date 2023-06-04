import { Request, Response, response } from "express";
import { ListarDenunciasUseCase } from "./ListarDenunciasUseCase";
class ListarDenunciasController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listarDenuncias = new ListarDenunciasUseCase();
    const all = await listarDenuncias.execute();
    return response.json(all);
  }
}

export { ListarDenunciasController };
