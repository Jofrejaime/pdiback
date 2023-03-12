import {  Project } from "@prisma/client";
import { prisma } from "../../../../prisma/clint";

export function AddLanguageOnProject(languages:undefined[] | undefined, project: Project){
  if(languages){
    languages.toString().split(',').map(async language => await  prisma.project.update({
      'where':{'id': project.id},
      data:{
        'LanguageOfProject':{
          'create':{
            'languageLabel': language
          }
        }
    }
      }
 ) )
}

}