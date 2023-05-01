import { User } from "@prisma/client";
import { Response, Request } from "express";
import { prisma } from "../../../../prisma/clint";
import { AppError } from "../../../../errors/AppErrors";
import { AddAreaOnProfile } from "../../../areas/useCases/addArea/AddAreaOnProfile";
import { AddLanguageOnProfile } from "../../../languages/useCases/AddLanguage/AddLanguageOnProfile";
import { AddToolOnProfile } from "../../../tools/useCases/AddTool/AddToolOnProfile";
class UpdateUserUseCase {
 async execute({id, email, usernames, userName, firstName, lastName, bio, selectedAreas, selectedLanguages, selectedPais, selectedTools}:any): Promise<User>{
  const user = await prisma.user.update({
    where:{id},
    'data':{
      email,
      userName,
      'profile':{
        'update':{
          bio,
          firstName,
          lastName,
          'paisLabel': selectedPais.label
        }
      }
    },'include':{'profile':true}
  })
  if(!user) throw new AppError('Não conseguimos actualizar')

  if(selectedLanguages && user){
    AddLanguageOnProfile(selectedLanguages, user)
  }
  if(selectedAreas && user)
  AddAreaOnProfile(selectedAreas, user)
  if(selectedTools && user)
  AddToolOnProfile(selectedTools, user)
  if(user)
  usernames.map(async (username:any)=> { 
  try{
    username.username !=='' && await prisma.linksToProfile.create({'data':{'username':username.label, 'profileId': user.profile?.id, 'label':username.username}})
  }catch(err){
    throw new AppError('Não conseguimos actualizar as as redes')
  }
}
  )
  return user

 }
}

export default UpdateUserUseCase;
