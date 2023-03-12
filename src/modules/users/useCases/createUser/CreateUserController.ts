import { Console } from "console";
import { Response, Request } from "express";
import { CreateUserUseCase } from "./CreateUserService";
class CreateUserController {
  async handle(request: Request, response: Response) {
    const uploadedPhoto = request.file;
    const {
      userName,
      email,
      bio,
      lastName,
      firstName,
      genderName,
      paisLabel,
      languages,
      areas,
      links,
      User,
      userId,
      tools,
      password
    } = request.body;
    const createUserUseCase = new CreateUserUseCase();     
    const result = await createUserUseCase.execute({
      password,
      lastName,
      firstName,
      email,
      bio,
      paisLabel,
      genderName,
      uploadedPhoto,
      languages,
      areas,
      links,
      User,
      userId,
      tools,
      userName: userName[1].toString(),
    });
       
    return response.status(201).json(result);
  }
}
export { CreateUserController };
