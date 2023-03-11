import fs from 'fs';
import { resolve } from 'path';
 export function createDir(nameDir: string){
  const dir = `${resolve('uploads')}/${nameDir}`;
      fs.access(dir, (err)=>{
        if(err){
        fs.mkdir(dir, (err)=>{
            if(err)
            throw new Error(' algum erro na criação da pasta')
            else{
            return dir;
          }
          });
        } else
        console.log(nameDir," já existe")
        return dir
      })
  }
