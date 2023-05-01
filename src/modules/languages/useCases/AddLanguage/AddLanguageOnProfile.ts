import {  Language, User } from "@prisma/client";
import { prisma } from "../../../../prisma/clint";
import { AppError } from "../../../../errors/AppErrors";

export function AddLanguageOnProfile(languages:Language[], user: User){
  if(languages){
    try{languages.map(async language => await  prisma.profile.update({
      'where':{'userId': user.id},
      data:{'LanguageOfProfile': {
        'create':{
          'languageLabel': language.label
        }
      }
    }
      }
 ) )}catch(err){
  throw new AppError('Algumama coisa deu errado')
 }
    
}

}