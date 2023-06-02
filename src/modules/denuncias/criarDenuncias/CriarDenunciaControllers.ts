import { Request, Response } from "express";
import { CriarDenunciaUseCase } from "./CriarDenunciasUseCase";

class CriarDenunciaController {
  async handle(res: Response, req: Request) {
    const newDenuncia = new CriarDenunciaUseCase();
    const { projectId, content, id, project } = req.body;
    const denuncia = await newDenuncia.execute({ projectId, content, id });
    return res.status(200).json(denuncia);
  }
}
export { CriarDenunciaController };
