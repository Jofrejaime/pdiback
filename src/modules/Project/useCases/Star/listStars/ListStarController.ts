import { Request, Response } from "express";
import { ListStarUseCase } from "./ListStarUseCase";

class ListStarController{
 async handle (req: Request,res: Response){
  console.log('aqui')
    const newListStar = new ListStarUseCase()
    const listStar = await newListStar.execute()
    console.log(listStar)
    return res.send(200).json(listStar)
  }
}
export {ListStarController}