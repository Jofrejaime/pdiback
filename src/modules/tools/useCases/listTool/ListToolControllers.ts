import { Request, Response, response } from "express";
import { ListToolUseCase } from "./ListToolUseCase";
class ListToolController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listTool = new ListToolUseCase();
    const allTool = await listTool.execute();
    return response.json(allTool);
  }
}

export { ListToolController };
