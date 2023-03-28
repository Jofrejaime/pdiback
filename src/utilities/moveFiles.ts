import fs from "fs-extra";
import { resolve } from "path";
import { AppError } from "../errors/AppErrors";
import { createDir } from "./createDir";
export function moveFile(
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
    const dest = createDir(`users/${dirName}/profile/`);
    const destFinal = `${dest}/${filename}`;
    const fileMoved = fs.move(src, resolve("uploads")+destFinal.toString(), (err) => {
      if (err) throw new AppError(" Ficheiro não movido ");
    });
    return `/users/${dirName}/profile/${filename}`;
  } else if (projectTitle && !isProfile && file) {
    const filename = file.filename;
    const src = `${resolve("uploads")}/${filename}`;
    const preDest = createDir(`users/${dirName}/projects/${projectTitle}`);
    const dest = `${preDest}/${filename}`;
    fs.move(src, resolve('uploads')+dest, (err) => {
      if (err) throw new AppError("ficheiro não movido");
    });

    return `/users/${dirName}/projects/${projectTitle}/${filename}`;
  } else if (
    !isProfile &&
    !projectTitle &&
    file &&
    dirName &&
    other &&
    nameOther
  ) {
    const filename = file.filename;
    const src = `${resolve("uploads")}/${file.filename}`;
    const preDest = createDir(`${dirName}/${other}/${nameOther}`);
    const dest = `${preDest}/${filename}`;
    fs.move(src, resolve("uploads")+dest.toString(), (err) => {
      if (err) throw new AppError("Não moveu o ficheiro");
    });
    return `/${dirName}/${other}/${nameOther}/${filename}`;
  } else return "";
}
