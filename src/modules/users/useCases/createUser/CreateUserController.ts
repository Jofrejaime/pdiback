import { Response, Request } from "express";
import { CreateUserUseCase } from "./CreateUserService";
class CreateUserController {
  async handle(request: Request, response: Response) {
    const uploadedPhoto = request.file;
    console.log(uploadedPhoto, ' pohoto')
    
    const {
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
      userName,
      password
    } = request.body;
    const createUserUseCase = new CreateUserUseCase();
    console.log(uploadedPhoto, ' ', genderName)
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
      userName,
    });
    return response.status(201).json(result);
  }
}
export { CreateUserController };
