import { Prisma, Project, User, Area } from "@prisma/client";
import { prisma } from "../../../../prisma/clint";

export function AddAreaOnProject(areas:undefined[] | undefined, project: Project){
  if(areas){
    areas.map(async area => await  prisma.project.update({
      'where':{'id': project.id},
      data:{
        'AreaOfProject':{
          'create':{
            'areaLabel': area
          }
        }
    }
      }
 ) )
}

}