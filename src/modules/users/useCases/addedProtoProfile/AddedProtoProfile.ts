import { User } from "@prisma/client";
import { Multer } from "multer";
import { prisma } from "../../../../prisma/clint";
import { createDir } from "../../../../utilities/createDir";
import { moveFile } from "../../../../utilities/moveFiles";

export async function addPhotoProfile (photoProfile: Express.Multer.File, user: User ){
  let url: string | undefined;
  if (photoProfile) {  
  url = moveFile(photoProfile, user.userName,true)
  } else {
    createDir(`${user.userName}`);
  }
  await prisma.profile.update({
    where: { userId: user.id },
    data: {
     'photo_url': url
      },
    })

  }