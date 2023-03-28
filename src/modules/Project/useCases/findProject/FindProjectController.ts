import { Request, Response } from "express";
import fs from "fs";
import { resolve } from "path";
import { FindProjectUseCase } from "./FindProjectUseCase";
class FindProjectController {
  async handle(request: Request, response: Response):Promise<Response>{
     const {id} =  request.params;
  
      const project = new FindProjectUseCase();
    const findedProject = await project.execute(id) 
    const allFiles =  fs.readdirSync(resolve('uploads') + findedProject.files)
      return response.status(200).json({findedProject, allFiles})
  }
}
export {FindProjectController}