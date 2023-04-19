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
    if (area || label || limit || language) {
      const allProject = await prisma.project.findMany({
        where: {
          OR: {
            AND: [
              { AreaOfProject: { some: { areaLabel: { startsWith: area } } } },
              {
                LanguageOfProject: {
                  some: { languageLabel: { startsWith: language } },
                },
              },
              {
                OR: [
                  { title: { contains: label } },
                  { user: { userName: { startsWith: label } } },
                  {
                    ToolOfProject: {
                      some: { toolLabel: { startsWith: label } },
                    },
                  },
                ],
              },
            ],
          },
        },

        include: {
          AreaOfProject: {'orderBy':{}},
          LanguageOfProject: {'orderBy':{'languageLabel':'asc'}},
          Stars: true,
          ToolOfProject: {'orderBy':{'toolLabel': 'asc'}},
          '_count': true,
          'Views':{
            'include':{'Viewer':true}
          },
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
          created_at: "desc",
        },
      });
      return allProject;
    } else if (userName) {
      const allProject = prisma.project.findMany({
        where: { user: { userName } },
        include: {
          AreaOfProject: {'orderBy':{'areaLabel':'asc'}},
          LanguageOfProject: {'orderBy':{'languageLabel':'asc'}},ToolOfProject: {'orderBy':{'toolLabel': 'asc'}},
          Stars: true,
          _count: true,
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
          created_at: "desc",
        },
      });
      return allProject;
    } else {
      const allProject = prisma.project.findMany({
        include: {
          AreaOfProject: {'orderBy':{}},
          LanguageOfProject: {'orderBy':{'languageLabel':'asc'}},
          Stars: true,
          ToolOfProject: {'orderBy':{'toolLabel': 'asc'}},
          '_count': true,
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
          created_at: "desc",
        },
      });
      return allProject;
    }
  }
}
export { ListProjectUseCase };
