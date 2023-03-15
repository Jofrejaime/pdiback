import { Response, Request } from "express";
import { moveFile } from "../../../../utilities/moveFiles";
import { CreateLanguageUseCase } from "./CreateLanguageUseCase";
class CreateLanguageController {
  async handle(request: Request, response: Response) {
        const file = request?.file;
    const {  label, icon_url } = request.body;
    console.log(label, file)
    const createLanguages = new CreateLanguageUseCase();
    const urlImage = moveFile(file, 'stacks', false,undefined,'languages',label)
    const result = await createLanguages.execute({
      label,
      icon_url:`${urlImage}`,
    });
    return response.status(201).json(result);
  }
}
export { CreateLanguageController };
