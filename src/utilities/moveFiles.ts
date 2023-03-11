import { create } from "domain";
import fs from "fs-extra";
import { dirname, resolve } from "path";
import { createDir } from "./createDir";
export function moveFile(
  file: Express.Multer.File | undefined,
  userName: string,
  isProfile: boolean,
  projectTitle?: string
) {
  const fileSrc = file?.filename;
  const userDir = createDir(userName);

  if (isProfile && fileSrc) {
    const userDirProfile = createDir(`${userDir}/photoProfile/`);
    const userDirProfilePhoto = `uploads/${userDirProfile}${fileSrc}`;
    fs.move(`uploads/${fileSrc}`, userDirProfilePhoto, { overwrite: true })
      .then(() => {
        return userDirProfilePhoto;
      })
      .catch((e) => {
        console.error(e);
      });
  } else if (fileSrc) {
    const userDirProjectEspecific = createDir(
      `${userDir}/projects/${projectTitle}`
    );
    
    fs.move(
      `${resolve("uploads")}/${userDir}/${fileSrc}`,
      `${resolve("uploads")}/${userDirProjectEspecific}/${fileSrc}`,
      { overwrite: true }
    )
      .then(() => {
        console.log("Projeto movido com sucesso");
        return `${resolve("uploads")}/${userDirProjectEspecific}/${fileSrc}`;
      })
      .catch((e) => console.error(e, " Alguma coisa deu erra"));
  }
  return null;
}
