import { prisma } from "../../../../prisma/clint";
import { User } from "@prisma/client";
import { hash } from "bcrypt";
import { AppError } from "../../../../errors/AppErrors";
class CreateUserUseCase {
  async execute({
    email,
    lastName,
    firstName,
    paisLabel,
    password,
    userName,
  }: any): Promise<User> {
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
            },
          },
        },
      });
      return user;
    }
  }
}

export { CreateUserUseCase };

/**
 * 
      if (uploadedPhoto && user) {
        addPhotoProfile(uploadedPhoto, user);
      } else if (uploadedPhoto && !user) {
      await fs.remove(`${resolve("uploads/")}/${uploadedPhoto.filename}`)
          .then(() => console.log("Removido com sucesso"))
          .catch((e) => console.log("Não removeu nada"));
      }
      if (user) {
        AddAreaOnProfile(areas, user);
        AddLanguageOnProfile(languages, user);
        AddToolOnProfile(tools, user);
      }

 */
