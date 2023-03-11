import { Response, Request } from "express";
import { CreateLanguageUseCase } from "./CreateAreaUseCase";
class CreateLanguageController {
  async handle(request: Request, response: Response) {
    const { value, label, icon_url } = request.body;
    const createArea = new CreateLanguageUseCase();
    const result = await createArea.execute({
      label,
      icon_url,
      value,
    });
    return response.status(201).json(result);
  }
}
export { CreateLanguageController };
