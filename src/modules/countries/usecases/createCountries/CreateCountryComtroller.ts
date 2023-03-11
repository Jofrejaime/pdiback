import { Response, Request } from "express";
import { CreateCountryUseCase } from "./CreateCountryUseCase";
class CreateCountryController {
  async handle(request: Request, response: Response) {
    const {
      name,
      acronym1,
      acronym2,
      code,
    } = request.body;
    const createCountry = new CreateCountryUseCase();
    const result = await createCountry.execute({
      name,
      acronym1,
      acronym2,
      code,
    });
    return response.status(201).json(result);
  }
}
export { CreateCountryController };
