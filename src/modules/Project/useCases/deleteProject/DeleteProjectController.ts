import { Request, Response } from "express";
import fs from "fs-extra";
import { resolve } from "path";
import { DeleteProjectUseCase } from "./DeleteProjectUseCase";
class DeleteProjectController {
  async handle(request: Request, response: Response):Promise<Response>{
     const {id} =  request.params;
     
      const project = new DeleteProjectUseCase();
    const deletedProject = await project.execute(id) 
    const removed =  fs.removeSync(resolve('uploads') + deletedProject.files)

      return response.status(200).json({deletedProject, removed})
  }
}
export {DeleteProjectController}