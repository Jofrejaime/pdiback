import { Request, Response } from "express"
export default class UpdateUserController {
  async handle(request: Request, response: Response) {
    const file = request.file
    const {
      email, usernames, userName, firstName, lastName, bio, selectedAreas, selectedLanguages, selectedPais, selectedTools
    } = request.body

  }
}
