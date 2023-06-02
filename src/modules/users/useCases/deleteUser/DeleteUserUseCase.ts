import { User } from "@prisma/client"
import { AppError } from "../../../../errors/AppErrors"
import { prisma } from "../../../../prisma/clint"

class DeleteUserUseCase{
async execute({id}: any): Promise<User>{

  const user = await prisma.user.findUnique({'where':{id}, include:{profile:true}})
  if(!user)
  throw new AppError('User not exists')
  const updateUser = prisma.user.update({'where':{id}, 'data':{'Actions':{'deleteMany':{'receiverId':id, 'OR':{'issuerId': id}}}, 'Comment':{'deleteMany':{'userId':id}}, 'Views':{'deleteMany':{'viewerName':user.userName}}, 'MemberToConversation':{'deleteMany':{'memberId':id}}, 'Messages':{'deleteMany':{'userId':id}}, 'projects':{'deleteMany':{'userId':id}}, 'Notifications':{'deleteMany':{'issuerId':id, OR:{'receiverId':id}}}, 'Following':{'deleteMany':{'followerId':id, followingId: user.profile?.id}}, 'Star':{'deleteMany':{'userId':id}}}})
  await prisma.profile.update({'where':{userId: id}, 'data':{'AreaofProfile':{'deleteMany':{'profileId':user.profile?.id}}, 'Follow':{'deleteMany':{'followerId':id, followingId: user.profile?.id}},'LanguageOfProfile':{'deleteMany':{'profileId':user.profile?.id}}, 'LinksToProfile':{'deleteMany':{'profileId':user.profile?.id}}, 'ToolofProfile':{'deleteMany':{'profileId':user.profile?.id}}}})
  await prisma.profile.delete({'where':{id: user.profile?.id}})
  return prisma.user.delete({'where':{id}})
}
}
export {DeleteUserUseCase}