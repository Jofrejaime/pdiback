import { IProjectDTO } from "../../../dtos/IProjectDTO";
import { prisma } from "../../../../prisma/clint";
import { Comment, Project } from "@prisma/client";
class CommentOnProjectUseCase {
  async execute({ comment, id, userId }: any): Promise<Comment | null> {
    const createdComment = await prisma.comment.create({
      data: {
        projectId: id,
        userId,
        content: comment,
      },
    });
    const finalComment = await prisma.comment.findUnique({
      where: { id: createdComment.id },
      include: {
        User: {
          include: {
            profile: true,
          },
        },
      },
    });

    return finalComment;
  }
}

export { CommentOnProjectUseCase };
