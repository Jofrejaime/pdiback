import { Area, AreaofProfile, Profile } from "@prisma/client";

interface ICreateUserDTO{
  firstName: string;
  lastName: string;
  email: string;
  password: string
  bio: string;
  genderName: undefined;
  paisLabel: undefined;
  languages: undefined;
  areas: undefined[];
  links: undefined[];
  uploadedPhoto: Express.Multer.File|undefined;
  tools: undefined[];
  User: undefined;
  userId: string;
  userName: string;
}

export {ICreateUserDTO}