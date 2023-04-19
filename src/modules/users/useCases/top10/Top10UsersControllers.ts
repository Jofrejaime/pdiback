import { Request, Response, response } from "express";
import { Top10UsersUseCase } from "./Top10UsersUseCase";
import { FindUserUseCase } from "../findUser/FindUserUseCase";
import fs  from "fs";
import { resolve } from "path";
class Top10UsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listUsers = new  Top10UsersUseCase();
    const allProject = await listUsers.execute();
    const allFiles =  allProject.map( project =>  {
      const files =  fs.readdirSync(resolve('uploads') + project.files)
     return { project,files: files}
     } )
    return response.json(allFiles);
  }
}

export { Top10UsersController };
