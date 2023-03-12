import { Project } from "@prisma/client";
import { prisma } from "../../../../prisma/clint";

export function AddToolOnProject(
  tools: undefined[] | undefined,
  project: Project
) {
  if (tools) {
    tools.toString().split(',').map(
      async (tool) =>
        await prisma.project.update({
          where: { id: project.id },
          data: {
            ToolOfProject: {
              create: {
                toolLabel: tool,
              },
            },
          },
        })
    );
  }
}
