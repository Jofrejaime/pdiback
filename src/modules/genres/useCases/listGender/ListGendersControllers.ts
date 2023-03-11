import { Request, Response, response } from "express";
import { ListGenderUseCase } from "./ListGenderUseCase";
class ListGendersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listGenders = new ListGenderUseCase();
    const allGenders = await listGenders.execute();
    return response.json(allGenders);
  }
}

export { ListGendersController };
