import { Response, Request } from "express";
import { ViewOnProjectUseCase } from "./ViewOnProjectUseCase";
class ViewOnProjectController {
  async handle(request: Request, response: Response) {
    const {   viewerName,
      projectId } = request.params;
    console.log(request.params); 
    const viewOnProject = new ViewOnProjectUseCase();
    const result = await viewOnProject.execute({  viewerName,
      projectId });
    return response.status(201).json(result);
  }
}
export { ViewOnProjectController };
