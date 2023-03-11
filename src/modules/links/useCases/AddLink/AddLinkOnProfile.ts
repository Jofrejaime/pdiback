import {  User } from "@prisma/client";
import { prisma } from "../../../../prisma/clint";

export function AddLinkOnProfile(links:undefined[], user: User, href: string){
  if(links){
    links.map(async link => await  prisma.profile.update({
      'where':{'userId': user.id},
      data:{'LinksOfProfile': {
        'create':{
          'linkName': link,
        }
      }
    }
      }
 ) )
}

}