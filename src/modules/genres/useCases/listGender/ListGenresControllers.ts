import { Request, Response, response } from "express";
import { ListGenresUseCase } from "./ListGenresUseCase";
class ListGenresController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listGenres = new ListGenresUseCase();
    const allGenres = await listGenres.execute();
    return response.json(allGenres);
  }
}

export { ListGenresController };
