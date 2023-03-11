import { prisma } from "../../../../prisma/clint";
import {  Tool } from "@prisma/client";
class ListToolUseCase {
  async execute(): Promise<Tool[]> {
    
    const allTool = await prisma.tool.findMany({
     
    });
    console.dir(allTool, { depth: null });
    return allTool;
  }
}
export { ListToolUseCase };
