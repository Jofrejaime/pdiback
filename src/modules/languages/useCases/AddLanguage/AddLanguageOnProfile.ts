import {  User } from "@prisma/client";
import { prisma } from "../../../../prisma/clint";

export function AddLanguageOnProfile(languages:undefined[], user: User){
  if(languages){
    languages.map(async language => await  prisma.profile.update({
      'where':{'userId': user.id},
      data:{'LanguageOfProfile': {
        'create':{
          'languageLabel': language
        }
      }
    }
      }
 ) )
}

}