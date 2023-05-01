import {  Tool, User } from "@prisma/client";
import { prisma } from "../../../../prisma/clint";
import { AppError } from "../../../../errors/AppErrors";

export function AddToolOnProfile(tools:Tool[], user: User){
  if(tools){
   try{
    tools.map(async tool => await  prisma.profile.update({
      'where':{'userId': user.id},
      data:{'ToolofProfile': {
        'create':{
          'toolLabel': tool.label
        }
      }
    }
      }
 ) )
   }catch(e){
    throw new AppError('Algo deu errado')
   }
}

}