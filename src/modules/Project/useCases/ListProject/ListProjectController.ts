import { Request, Response, response } from "express";
import fs from "fs";
import { resolve } from "path";
import { ListProjectUseCase } from "./ListProjectUseCase";
class ListProjectController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listProject = new ListProjectUseCase();
    const allProject = await listProject.execute();
     
   const allFiles =  allProject.map( project =>  {
   const files =  fs.readdirSync(resolve('uploads') + project.files)
  return { project,files: files}
  } )

    return response.json(allFiles);
  }
}

export { ListProjectController };