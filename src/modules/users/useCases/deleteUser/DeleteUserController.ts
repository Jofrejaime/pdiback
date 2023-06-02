import {Request, Response} from 'express'
import { DeleteUserUseCase } from './DeleteUserUseCase'
class DeleteUserController{
async handle(res: Response, req: Request){
  const {id} = req.params
  console.log(req.params)
  const newDeleteUser = new DeleteUserUseCase()
  const deleteUser = await newDeleteUser.execute({id})
  return res.status(200).json(deleteUser)
}
}
export {DeleteUserController}