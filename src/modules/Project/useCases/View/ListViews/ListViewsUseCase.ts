import { View } from "@prisma/client"
import { prisma } from "../../../../../prisma/clint"

class ListViewsUseCase{
async execute(): Promise<View[]>{
  
return await prisma.view.findMany()
 }
}
export {ListViewsUseCase}