import { Response, Request } from "express";
import { moveFile } from "../../../../utilities/moveFiles";
import { CreateLanguageUseCase } from "./CreateLanguageUseCase";
class CreateLanguageController {
  async handle(request: Request, response: Response) {
        const file = request?.file;
    const { value, label, icon_url } = request.body;
    const createLanguages = new CreateLanguageUseCase();
    const urlImage = moveFile(file, 'languages', false,undefined, label)
    const result = await createLanguages.execute({
      label,
      'icon_url':`${urlImage}`,
      value,
    });
    return response.status(201).json(result);
  }
}
export { CreateLanguageController };
