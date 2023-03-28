import { Response, Request } from "express";
import { StarOnProjectUseCase } from "./StarOnProjectUseCase";
class StarOnProjectController {
  async handle(request: Request, response: Response) {
    const { userId, id } = request.params;
    console.log(userId, id); 
    const starOnProject = new StarOnProjectUseCase();
    const result = await starOnProject.execute({ userId, id });
    return response.status(201).json(result);
  }
}
export { StarOnProjectController };
