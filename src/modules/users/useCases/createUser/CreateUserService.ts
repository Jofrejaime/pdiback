import { ICreateUserDTO } from "../../../dtos/IUserRepository";
import { prisma } from "../../../../prisma/clint";
import { User } from "@prisma/client";
import { createDir } from "../../../../utilities/createDir";
import { moveFile } from "../../../../utilities/moveFiles";
import { AddAreaOnProfile } from "../../../areas/useCases/addArea/AddAreaOnProfile";
import { AddLanguageOnProfile } from "../../../languages/useCases/AddLanguage/AddLanguageOnProfile";
import { AddToolOnProfile } from "../../../tools/useCases/AddTool/AddToolOnProfile";

class CreateUserUseCase {
  async execute({
    email,
    lastName,
    firstName,
    bio,
    genderName,
    paisLabel,
    languages,
    areas,
    links,
    tools,
    password,
    uploadedPhoto,
    userName,
  }: ICreateUserDTO): Promise<User> {
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (userAlreadyExists) {
      throw new Error("User Already Exists!");
    }else{
    
let photo_url: string | undefined;
      if (uploadedPhoto) {  
        photo_url = moveFile(uploadedPhoto, userName,true)
      } else {
        createDir(`${userName[1]}`);
      }
  
      const user = await prisma.user.create({
        data: {
          password,
          email,
          userName,
          profile: {
            create: {
              lastName,
              firstName,
              paisLabel,
              genderName: genderName,
              photo_url
            },
          },
        },
      });
     
      if(user) {
        
      AddAreaOnProfile(areas, user)
      AddLanguageOnProfile(languages, user)
      AddToolOnProfile(tools, user)
      }
      
      return user;  
    }}
}

export { CreateUserUseCase };
