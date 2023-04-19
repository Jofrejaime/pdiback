import { prisma } from "../../../../../prisma/clint";
import { Follow } from "@prisma/client";
import { compare } from "bcrypt";
class FollowUserUseCase {
  async execute({ following, follower }: any): Promise<Follow[]> {
    const follow = await prisma.follow.findUnique({
     where:{
      'followerId_followingId':{
        'followerId': follower,
        'followingId': following,
      }
     }
    });
    if (!follow) {
  const follow =  await prisma.follow.create({
        data: {
         'followerId': follower,
         'followingId': following
        },
      });
    const lisfOfFollow  = await prisma.follow.findMany({'where':{'followingId': following}})
      return lisfOfFollow ;
    } else {
      const follow = await prisma.follow.delete({
        where: { 'followerId_followingId':{
          'followerId': follower,
          'followingId': following
        } },
      });

      const lisfOfFollow  = await prisma.follow.findMany({'where':{'followingId': following}})
      return lisfOfFollow;
    }
  }
}

export { FollowUserUseCase };
