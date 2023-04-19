import { Response, Request } from "express";
import { FollowUserUseCase } from "./FollowUserUseCase";
class FollowUserController {
  async handle(request: Request, response: Response) {
    const {following, follower} = request.body;
    const starOnProject = new FollowUserUseCase();
    const result = await starOnProject.execute({ following, follower });
    return response.status(201).json(result);
  }
}
export { FollowUserController };
