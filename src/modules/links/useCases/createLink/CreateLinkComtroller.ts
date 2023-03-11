import { Response, Request } from "express";
import { CreateLinkUseCase } from "./CreateLinkUseCase";
class CreateLinkController {
  async handle(request: Request, response: Response) {
    const {  name,
      src,
      href } = request.body;
    const createLink = new CreateLinkUseCase();
    const result = await createLink.execute({
      name,
      src,
      href
    });
    return response.status(201).json(result);
  }
}
export { CreateLinkController };
