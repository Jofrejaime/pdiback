import { User } from "@prisma/client";
import { AppError } from "../../../../errors/AppErrors";
import { prisma } from "../../../../prisma/clint";

class DeleteUserUseCase {
  async execute({ id }: any): Promise<User> {
    const user = await prisma.user.findUnique({
      where: { id },
      include: { profile: true },
    });
    await prisma.memberToConversation.deleteMany({ where: { memberId: id } });
    await prisma.conversation.deleteMany({
      where: { MemberToConversation: { some: { memberId: id } } },
    });
    await prisma.linksToProfile.deleteMany({
      where: { profileId: user?.profile?.id },
    });
    await prisma.toolofProfile.deleteMany({
      where: { profileId: user?.profile?.id },
    });
    await prisma.languageOfProfile.deleteMany({
      where: { profileId: user?.profile?.id },
    });
    await prisma.areaofProfile.deleteMany({
      where: { profileId: user?.profile?.id },
    });
    await prisma.languageOfProject.deleteMany({
      where: { Project: { userId: id } },
    });
    await prisma.toolOfProject.deleteMany({
      where: { Project: { userId: id } },
    });
    await prisma.areaOfProject.deleteMany({
      where: { Project: { userId: id } },
    });
    await prisma.project.deleteMany({ where: { userId: id } });
    await prisma.comment.deleteMany({ where: { Project: { userId: id } } });
    await prisma.denuncias.deleteMany({ where: { project: { userId: id } } });
    const deleteUser = await prisma.user.delete({ where: { id } });
    return deleteUser;
  }
}
export { DeleteUserUseCase };
