import { Request, Response, response } from "express";
import { ListUsersUseCase } from "./ListUsersUseCase";
import { FindUserUseCase } from "../findUser/FindUserUseCase";
class ListUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listUsers = new ListUsersUseCase();
    const allUsers = await listUsers.execute();
    return response.json(allUsers);
  }
}

export { ListUsersController };
