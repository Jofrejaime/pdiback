import {
  AreaOfProject,
  Comment,
  LanguageOfProject,
  Star,
  ToolOfProject,
  User,
} from "@prisma/client";
import { File } from "buffer";

export interface IProjectDTO {
  
    userId: string;
  title: string;
  description: string;
  respository_url: string;
  Comment?: string;
  Stars?: string;
  LanguageOfProject: undefined[] | undefined;
  projectRepository: string;
  AreaOfProject: undefined[] | undefined;
  ToolOfProject: undefined[] | undefined;
  files:  string
 
}
