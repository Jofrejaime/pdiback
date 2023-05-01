import { Area, User } from "@prisma/client";
import { prisma } from "../../../../prisma/clint";
import { AppError } from "../../../../errors/AppErrors";
export function AddAreaOnProfile(areas: Area[], user: User) {
  if (areas) {
    try{areas.map(
      async (area) =>
        await prisma.profile.update({
          where: { userId: user.id },
          data: {
            AreaofProfile: {
              create: {
                areaLabel: area.label,
              },
            },
          },
        })
    );}catch(e){
      throw new AppError('Algo deu errado')
    }
    
  }
}
