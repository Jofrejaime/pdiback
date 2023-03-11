import { Response, Request } from "express";
import { CreateGenderUseCase } from "./CreateGenderUseCase";
class CreateGenderController {
  async handle(request: Request, response: Response) {
    const {
      id,
      name
    } = request.body;
    const createGenre = new CreateGenderUseCase();
    const result = await createGenre.execute({
      name, id
    });
    return response.status(201).json(result);
  }
}
export { CreateGenderController };
