import { Response, Request } from "express";
import { moveFile } from "../../../../utilities/moveFiles";
import { CreateLinkUseCase } from "./CreateLinkUseCase";
class CreateLinkController {
  async handle(request: Request, response: Response) {
    const file = request?.file
    const { label, url} = request.body;
    const createLink = new CreateLinkUseCase();
    const value = ''
    const icon = moveFile(file, 'stacks', false,undefined, 'links',label )
    const result = await createLink.execute({
      label,
     icon,
     url, 
   value
    });
    return response.status(201).json(result);
  }
}
export { CreateLinkController };
