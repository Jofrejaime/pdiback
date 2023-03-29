import { Response, Request } from "express";
import { CommentOnProjectUseCase } from "./CommentOnProjectUseCase";
class CommentOnProjectController {
  async handle(request: Request, response: Response) {
    const {userId, id, comment} = request.params;
    const commentOnProject = new CommentOnProjectUseCase();

    const result = await commentOnProject.execute({ comment, userId, id });
    
    return response.status(201).json(result);
  }
}
export { CommentOnProjectController };
