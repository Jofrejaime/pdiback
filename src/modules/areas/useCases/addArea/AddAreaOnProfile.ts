import {User } from "@prisma/client";
import { prisma } from "../../../../prisma/clint";
export function AddAreaOnProfile(areas: undefined[], user: User) {
  if (areas) {
    const areasAdded: string[] = areas.toString().split(",");

    areasAdded.map(
      async (area) =>
        await prisma.profile.update({
          where: { userId: user.id },
          data: {
            AreaofProfile: {
              create: {
                areaLabel: area,
              },
            },
          },
        })
    );
  }
}
