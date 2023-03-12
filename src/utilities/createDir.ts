import fs from "fs-extra";
import { resolve } from "path";
export function createDir(nameDir: string): String {
  const dir = `${resolve("uploads")}/${nameDir}`;
  fs.mkdirs(dir, (err) => {
    if (err) return console.error(err, " pasta não criada");
    console.log("a pasta foi criada");
    return dir;
  });
  return dir;
}
