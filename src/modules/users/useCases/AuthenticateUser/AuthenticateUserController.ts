import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

 export class AuthenticateUserController{
async handle(request: Request, response: Response): Promise<Response>{
  const {userName, password} = request.body
  console.log(request.body)
  const authenticateUserUseCase = new AuthenticateUserUseCase();
  const token = await authenticateUserUseCase.execute({
    password,
    userName
  })
  return response.json(token)
}

}
