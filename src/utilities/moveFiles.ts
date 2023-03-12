import fs from "fs-extra";
import { resolve } from "path";
import { createDir } from "./createDir";
export function moveFile(
  file: Express.Multer.File | undefined,
  dirName: string,
  isProfile: boolean,
  projectTitle?: string,
  other?: string,
  nameOther?: string
){
  if (isProfile && dirName && file) {
    const filename = file.filename;
    const src = `${resolve("uploads")}/${file.filename}`;
    const dest = createDir(`${dirName}/profile/`);
    const destFinal = `${dest}/${filename}`;
    const fileMoved = fs.move(src, destFinal.toString(), (err) => {
      if (err) console.error(err, " ficheiro não movido ", destFinal);
      console.log("Ficheiro movido em", destFinal);
      return `${dirName}/profile/${filename}` ;    });
    console.log(fileMoved, " final");
    return destFinal
  } else if (projectTitle && !isProfile && file) {
    const filename = file.filename;
    const src = `${resolve("uploads")}/${filename}`;
    const preDest = createDir(`${dirName}/projects/${projectTitle}`);
    const dest = `${preDest}/${filename}`;
    fs.move(src, dest, (err) => {
      if (err) console.error(err, " ficheiro não movido");
      console.log(" ficheiro do projecto movido");
      return `${dirName}/projects/${projectTitle}/${filename}`;
    });
    return dest;
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
    const preDest = createDir(`${dirName}/${other}`);
    const dest = `${preDest}/${filename}`;
   
    fs.move(src, dest.toString(), err=>{
      if(err) return console.log( err, 'Não moveu o ficheiro')
      console.log( 'fircheiro movido')
    });
    return `${dirName}/${other}/${nameOther}/${filename}`;
  }
}