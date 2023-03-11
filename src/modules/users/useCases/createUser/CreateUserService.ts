import { ICreateUserDTO } from "../../dtos/IUserRepository";
import { prisma } from "../../../../prisma/clint";
import { User } from "@prisma/client";
import { createDir } from "../../../../utilities/createDir";
import { moveFile } from "../../../../utilities/moveFiles";


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
       email
      },
    });
    if (userAlreadyExists) {
      throw new Error("User Already Exists!");
    }


    if (uploadedPhoto) {
      console.log(userName, uploadedPhoto);
      const photo_url = moveFile(uploadedPhoto, userName, true);
    } else {
      createDir(userName);
    }
console.log(genderName)
     const label = areas;
    const user = await prisma.user.create({
      data: {
        password,
        email,
        userName,
        profile:{
          create:{
            lastName,
            firstName,
            paisLabel,
            'genderName':genderName,
           /* 'areaofProfile':{
              create:{
              'areaLabel':areas
                }
            }*/
          }} 
      }
    });
    
  if(areas){
      areas.map(async area => await  prisma.profile.update({
        'where':{'userId': user.id},
        data:{'areaofProfile': {
          'create':{
            'areaLabel': area
          }
        }}
        }
   ) )
}
    return user;
  }
}

export { CreateUserUseCase };
