import { IProjectDTO } from "../../../dtos/IProjectDTO";
import { prisma } from "../../../../prisma/clint";
import { View } from "@prisma/client";
class ViewOnProjectUseCase {
  async execute({   viewerName,
    projectId }: any): Promise<View> {
    
    const view = await prisma.view.create({
      'data':{
        viewerName,
        projectId
      }
    });  
  return view
  }  
}
export { ViewOnProjectUseCase };
