import fs from "fs-extra";
import { resolve } from "path";
import { createDir } from "./createDir";
export async function moveFile(
  file: Express.Multer.File | undefined,
  dirName: string,
  isProfile: boolean,
  projectTitle?: string,
  other?: string,
  nameOther?: string
) {
  if (isProfile && dirName && file) {
    const filename = file.filename;
    const src = `${resolve("uploads")}/${file.filename}`;
    const dest = createDir(`${dirName}/profile/`);
    const destFinal = `${dest}/${filename}`;
    const fileMoved = fs.move(src, destFinal.toString(), (err) => {
      if (err) console.error(err, " ficheiro não movido ", destFinal);
      console.log("Ficheiro movido em", destFinal);
      return destFinal;
    });
    console.log(fileMoved, " final");
  } else if (projectTitle && !isProfile && file) {
    const filename = file.filename;
    const src = `${resolve("uploads")}/${filename}`;
    const preDest = createDir(`${dirName}/projects/${projectTitle}`);
    const dest = `${preDest}/${filename}`;
    const fileMoved = fs.move(src, dest, (err) => {
      if (err) console.error(err, " ficheiro não movido");
      console.log(" ficheiro do projecto movido");
      return dest;
    });
    return fileMoved;
  } else if (
    !isProfile &&
    !projectTitle &&
    file &&
    dirName &&
    other &&
    nameOther
  ) {
    const filename = file.filename;
    const src = `${resolve("uploads")}/${file}`;
    const preDest = createDir(`${dirName}/${other}/${nameOther}`);
    const dest = `${preDest}/${filename}`;
    const fileMoved = fs.move(src, dest, (err) => {
      if (err)
        console.error(err, " Fircheiro não movido por um motivo especifivo");
      console.log(dest, " ficheiro foi movido com sucesso");
    });
    return fileMoved;
  }

}
