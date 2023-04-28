import {  User } from "@prisma/client";
import { prisma } from "../../../../prisma/clint";

export function AddLinkOnProfile(links:undefined[], user: User, href: string){
  if(links){
    links.toString().split(',').map(async link => await  prisma.profile.update({
      'where':{'userId': user.id},
      data:{'LinksToProfile': {
        'create':{
          'name': '',
         'username': link
        }
      }
    }
      }
 ) )
}

}