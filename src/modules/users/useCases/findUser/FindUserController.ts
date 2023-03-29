import { Request, Response } from "express";
import { FindUserUseCase } from "./FindUserUseCase";
class FindUserController {
  async handle(request: Request, response: Response):Promise<Response>{
     const {userName} =  request.body;
      const users = new FindUserUseCase();
    const findedUser = await users.execute(userName) 
      return response.status(200).json(findedUser)
  }
}
export {FindUserController}