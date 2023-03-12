import { Response, Request } from "express";
import { moveFile } from "../../../../utilities/moveFiles";
import { CreateLinkUseCase } from "./CreateLinkUseCase";
class CreateLinkController {
  async handle(request: Request, response: Response) {
    const file = request?.file
    const {name,
      src,
      href } = request.body;
    const createLink = new CreateLinkUseCase();
    const urlImage = moveFile(file, 'links', false,undefined, name)
    const result = await createLink.execute({
      name,
      src: `${urlImage}`,
      href
    });
    return response.status(201).json(result);
  }
}
export { CreateLinkController };
