import { Request, Response, response } from "express";
import { ListLanguageUseCase } from "./ListLanguageUseCase";
class ListLanguageController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listLanguage = new ListLanguageUseCase();
    const allLanguage = await listLanguage.execute();
    return response.json(allLanguage);
  }
}

export { ListLanguageController };
