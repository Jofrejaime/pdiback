import fs from 'fs';
 export function createDir(nameDir: string){

  const dir = `./uploads/${nameDir}`;
  
  console.log(dir)
      fs.access(dir, (err)=>{
        if(err){
        fs.mkdir(dir, (err)=>{
            if(err)
            console.log(err, ' algum erro na criação da pasta')
            else{
            console.log('Criou a pasta')
            return nameDir;
             
          }
          });
        } else
        console.log(nameDir," já existe")
        return nameDir
      })
   
      return nameDir
  }
