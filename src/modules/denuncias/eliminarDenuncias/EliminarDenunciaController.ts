import { Request, Response } from "express";
import { EliminarDenunciaUseCase } from "./EliminarDenunciaUseCase";
import reactStringReplace from "react-string-replace";

class EliminarDenunciaController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const newEliminarDenuncia = new EliminarDenunciaUseCase();
    const eliminarDenuncia = await newEliminarDenuncia.execute({ id });
    return res.status(201).json(eliminarDenuncia);
  }
}
export { EliminarDenunciaController };
