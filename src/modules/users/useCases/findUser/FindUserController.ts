import { Request, Response } from "express";
import { FindUserUseCase } from "./FindUserUseCase";
class FindUserController {
  async handle(request: Request, response: Response):Promise<Response>{
     const query =  request.query;
     const name = query.name?.toString()
      const users = new FindUserUseCase();
    const findedUser = await users.execute(name) 
    console.log(findedUser)
      return response.status(200).json(findedUser)
  }
}
export {FindUserController}