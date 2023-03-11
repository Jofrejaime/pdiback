import { Response, Request } from "express";
import { CreateGenreUseCase } from "./CreateGenresUseCase";
class CreateGenreController {
  async handle(request: Request, response: Response) {
    const {
      id,
      name
    } = request.body;
    const createGenre = new CreateGenreUseCase();
    const result = await createGenre.execute({
      name, id
    });
    return response.status(201).json(result);
  }
}
export { CreateGenreController };
