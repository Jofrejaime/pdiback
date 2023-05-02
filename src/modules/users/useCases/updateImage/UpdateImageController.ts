import { Request, Response } from "express";
import UpdateImageUseCase from "./UpdateImageUseCase";
import { addPhotoProfile } from "../addedProtoProfile/AddedProtoProfile";

class UpdateImageController{
  async handle(req: Request, res: Response){
    const file = req.file
    const {id} = req.params
    console.log(file, id)
    const useFile =  new UpdateImageUseCase()
    
    const fileFinal = useFile.execute({file, id})
    return res.status(202).json(file)
  }
}
export default UpdateImageController