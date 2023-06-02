import { Star } from "@prisma/client"
import { prisma } from "../../../../../prisma/clint"

class ListStarUseCase {
  async execute(): Promise<Star[]>{
    return await prisma.star.findMany()
  }
}
export {ListStarUseCase}