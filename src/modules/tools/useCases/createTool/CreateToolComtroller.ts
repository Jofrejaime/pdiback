import { Response, Request } from "express";
import { moveFile } from "../../../../utilities/moveFiles";
import { CreateToolUseCase } from "./CreateToolUseCase";
class CreateToolController {
  async handle(request: Request, response: Response) {
    const file = request?.file
    const { value, label, icon_url } = request.body;
    const createTool = new CreateToolUseCase();
    const urlImage = moveFile(file, 'tools', false,undefined, label)
    const result = await createTool.execute({
      label,
      'icon_url':`${urlImage}` ,
      value,
    });
    return response.status(201).json(result);
  }
}
export { CreateToolController };
