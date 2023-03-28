import fs from "fs-extra";
import { resolve } from "path";
import { AppError } from "../errors/AppErrors";
export function createDir(nameDir: string): string {
  const dir = `${resolve("uploads")}/${nameDir}`;

  fs.mkdirs(dir, (err) => {
    if (err) throw new AppError(" pasta não criada");
    return '/'+nameDir ;
  });
  return '/'+nameDir ;
}
