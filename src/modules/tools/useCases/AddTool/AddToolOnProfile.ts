import {  User } from "@prisma/client";
import { prisma } from "../../../../prisma/clint";

export function AddToolOnProfile(tools:undefined[], user: User){
  if(tools){
    tools.toString().split(',').map(async tool => await  prisma.profile.update({
      'where':{'userId': user.id},
      data:{'ToolofProfile': {
        'create':{
          'toolLabel': tool
        }
      }
    }
      }
 ) )
}

}