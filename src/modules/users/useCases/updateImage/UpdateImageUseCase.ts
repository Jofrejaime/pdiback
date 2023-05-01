import { Profile } from "@prisma/client";
import { addPhotoProfile } from "../addedProtoProfile/AddedProtoProfile";
import { Multer } from "multer";
import { prisma } from "../../../../prisma/clint";
import { AppError } from "../../../../errors/AppErrors";

class UpdateImageUseCase {
  async execute({ file, id }: any): Promise<any> {
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) throw new AppError("User not exists");
    addPhotoProfile(file, user);
    return { message: "sucess" };
  }
}
export default UpdateImageUseCase;
