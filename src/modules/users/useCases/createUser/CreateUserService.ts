import { ICreateUserDTO } from "../../../dtos/IUserRepository";
import { prisma } from "../../../../prisma/clint";
import { User } from "@prisma/client";
import { hash } from "bcrypt";
import { createDir } from "../../../../utilities/createDir";
import { moveFile } from "../../../../utilities/moveFiles";
import { AddAreaOnProfile } from "../../../areas/useCases/addArea/AddAreaOnProfile";
import { AddLanguageOnProfile } from "../../../languages/useCases/AddLanguage/AddLanguageOnProfile";
import { AddToolOnProfile } from "../../../tools/useCases/AddTool/AddToolOnProfile";
import { AppError } from "../../../../errors/AppErrors";
import { addPhotoProfile } from "../addedProtoProfile/AddedProtoProfile";
import fs, { remove } from "fs-extra";
import { resolve } from "path";

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
    console.log(tools, areas, languages)
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email, 
      },
    });
    if (userAlreadyExists) {
      throw new AppError("User Already Exists!");
    } else {
      const passwordHash = await hash(password, 8);

      const user = await prisma.user.create({
        data: {
          password: passwordHash,
          email,
          userName,
          profile: {
            create: {
              lastName,
              firstName,
              paisLabel,
              genderName: genderName,
            },
          },
        },
      });

      if (uploadedPhoto && user) {
        addPhotoProfile(uploadedPhoto, user);
      } else if (uploadedPhoto && !user) {
      await fs.remove(`${resolve("uploads/")}/${uploadedPhoto.filename}`)
          .then(() => console.log("Removido com succeo"))
          .catch((e) => console.log("Não removeu nada"));
      }
      if (user) {
        AddAreaOnProfile(areas, user);
        AddLanguageOnProfile(languages, user);
        AddToolOnProfile(tools, user);
      }

      return user;
    }
  }
}

export { CreateUserUseCase };
