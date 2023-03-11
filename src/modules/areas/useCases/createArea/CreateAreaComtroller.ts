import { Response, Request } from "express";
import { CreateAreaUseCase } from "./CreateAreaUseCase";
class CreateAreaController {
  async handle(request: Request, response: Response) {
    const { value, label, image_url } = request.body;
    const createArea = new CreateAreaUseCase();
    const result = await createArea.execute({
      label,
      image_url,
      value,
    });
    return response.status(201).json(result);
  }
}
export { CreateAreaController };
