import { prisma } from "../../../../prisma/clint";
import { Project } from "@prisma/client";
class ListProjectUseCase {
  async execute({
    userName,
    area,
    language,
    label,
    limit,
  }: any): Promise<Project[]> {
    if ( area || label || limit || language) {
      console.log(area, ' espe')
      const allProject = await prisma.project.findMany({
        where: {

              'AreaOfProject':{'some':{'areaLabel':{'startsWith': area}}}, 
              'OR':{'LanguageOfProject':{'some':{'Language':area}}}
        },
        include: {
          AreaOfProject: true,
          LanguageOfProject: true,
          Stars: true,
          ToolOfProject: true,
          Comment: {
            include: {
              User: {
                include: {
                  profile: true,
                },
              },
            },
          },
          user: {
            include: {
              profile: true,
            },
          },
        },
        orderBy: {
          created_at: "asc",
        },
      });
console.log(allProject)
      return allProject;
    } else if (userName) {
      console.log(userName, " Aqui");
      const allProject = prisma.project.findMany({
        where: { user: { userName } },
        include: {
          AreaOfProject: true,
          LanguageOfProject: true,
          Stars: true,
          ToolOfProject: true,
          Comment: {
            include: {
              User: {
                include: {
                  profile: true,
                },
              },
            },
          },
          user: {
            include: {
              profile: true,
            },
          },
        },
        orderBy: {
          created_at: "asc",
        },
      });
      return allProject;
    } else {
      console.log(" Puxando tudo ");
      const allProject = prisma.project.findMany({
        include: {
          AreaOfProject: true,
          LanguageOfProject: true,
          Stars: true,
          ToolOfProject: true,
          Comment: {
            include: {
              User: {
                include: {
                  profile: true,
                },
              },
            },
          },
          user: {
            include: {
              profile: true,
            },
          },
        },
        orderBy: {
          created_at: "asc",
        },
      });
      return allProject;
    }
  }
}
export { ListProjectUseCase };
