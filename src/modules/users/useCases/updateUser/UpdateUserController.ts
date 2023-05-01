import { Request, Response } from "express"
import UpdateUserUseCase from "./UpdateUserUseCase"
export default class UpdateUserController {
  async handle(request: Request, response: Response) {
    const file = request.file
    const {
      email, usernames, userName, firstName, lastName, bio, selectedAreas, selectedLanguages, selectedPais, selectedTools
    } = request.body
    const {id} = request.params
   const newUser  =  new UpdateUserUseCase()
   const user = await newUser.execute({id,email, usernames, userName, firstName, lastName, bio, selectedAreas, selectedLanguages, selectedPais, selectedTools})

   return response.status(202).json(user)

  }
}
