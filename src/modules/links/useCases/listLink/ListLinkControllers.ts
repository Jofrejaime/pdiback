import { Request, Response } from "express";
import { ListLinkUseCase } from "./ListLinkUseCase";
class ListLinkController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listLink = new ListLinkUseCase();
    const allLink = await listLink.execute();
    return response.json(allLink);
  }
}

export { ListLinkController };
