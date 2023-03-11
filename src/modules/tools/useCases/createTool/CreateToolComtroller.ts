import { Response, Request } from "express";
import { CreateToolUseCase } from "./CreateToolUseCase";
class CreateToolController {
  async handle(request: Request, response: Response) {
    const { value, label, icon_url } = request.body;
    const createTool = new CreateToolUseCase();
    const result = await createTool.execute({
      label,
      icon_url,
      value,
    });
    return response.status(201).json(result);
  }
}
export { CreateToolController };
