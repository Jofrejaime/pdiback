import { Request, Response, response } from "express";
import { ListAreaUseCase } from "./ListAreaUseCase";
class ListAreasController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAreas = new ListAreaUseCase();
    const allAreas = await listAreas.execute();
    return response.json(allAreas);
  }
}

export { ListAreasController };
