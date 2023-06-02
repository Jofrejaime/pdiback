import { Request, Response } from "express";
import { ListarDenunciasUseCase } from "./ListarDenunciasUseCase";

class ListarDenunciasController {
  async handle(res: Response, req: Request) {
    const newList = new ListarDenunciasUseCase();
    const list = await newList.execute();
    return res.status(200).json(list);
  }
}
export { ListarDenunciasController };
