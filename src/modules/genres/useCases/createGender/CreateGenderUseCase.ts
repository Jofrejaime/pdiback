import { IGrenreDTO } from "../../../dtos/IGenreDTO";
import { prisma } from "../../../../prisma/clint";
import { Gender } from "@prisma/client";
import { AppError } from "../../../../errors/AppErrors";
class CreateGenderUseCase {
  async execute({
    id,
    name,
  }: IGrenreDTO): Promise<Gender> {
   const genderAlreadyExists = await prisma.gender.findUnique({
      where: {
        id,
        name
      },
    });
    if (genderAlreadyExists) {
      throw new AppError("Country Already Exists!");
    }

 
    const gender = await prisma.gender.create({
      data: {
        name
      },
    });
    return gender;
  }
}

export { CreateGenderUseCase };
