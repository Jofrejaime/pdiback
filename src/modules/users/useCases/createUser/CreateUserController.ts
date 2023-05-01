import { Console } from "console";
import { Response, Request } from "express";
import { CreateUserUseCase } from "./CreateUserService";
class CreateUserController {
  async handle(request: Request, response: Response) {
    const {
      userName,
      email,
      lastName,
      firstName,
      password
    } = request.body;
    const createUserUseCase = new CreateUserUseCase();     
    const result = await createUserUseCase.execute({
      password,
      lastName,
      firstName,
      email,
      userName,
    });
       
    return response.status(201).json(result);
  }
}
export { CreateUserController };
