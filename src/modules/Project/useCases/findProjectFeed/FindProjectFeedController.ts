import { Request, Response } from "express";
import fs from "fs";
import { resolve } from "path";
import { FindProjectFeedUseCase } from "./FindProjectFeedUseCase";
class FindProjectFeedController {
  async handle(request: Request, response: Response):Promise<Response>{
     const {follower} =  request.params;
      const project = new FindProjectFeedUseCase();
    const listProject = await project.execute({follower}) 
   const allFiles =  listProject.map( project =>  {
   const files =  fs.readdirSync(resolve('uploads') + project.files)
  return { project,files: files}
  } )
    return response.json(allFiles);
  }
}
export {FindProjectFeedController}