import fs from "fs-extra";
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
    const userDirProfilePhoto = `${userDirProfile}${fileSrc}`;
    fs.move(`uploads/${fileSrc}`, userDirProfilePhoto, { overwrite: true })
      .then(() => {
        return userDirProfilePhoto;
      })
      .catch((e) => {
        console.error(e);
      });
  } else if (fileSrc) {
    const userDirProjectEspecific = createDir(
      `${userName}/projects/${projectTitle}`
    );
    
    fs.move(
      `${userDir}/${fileSrc}`,
      `${userDirProjectEspecific}/${fileSrc}`,
      { overwrite: true }
    )
      .then(() => {
        console.log("Projeto movido com sucesso");
        return `${userDirProjectEspecific}/${fileSrc}`;
      })
      .catch((e) => console.error(e, " Alguma coisa deu erra"));
  }
  return null;
}
