import { IGrenreDTO } from "../../dtos/IGenreDTO";
import { prisma } from "../../../../prisma/clint";
import { Genre } from "@prisma/client";
class CreateGenreUseCase {
  async execute({
    id,
    name,
  }: IGrenreDTO): Promise<Genre> {
   const genreAlreadyExists = await prisma.genre.findUnique({
      where: {
        id,
        name
      },
    });
    if (genreAlreadyExists) {
      throw new Error("Country Already Exists!");
    }

 
    const genre = await prisma.genre.create({
      data: {
        name
      },
    });
    return genre;
  }
}

export { CreateGenreUseCase };
