import { Response, Request } from "express";
import { moveFile } from "../../../../utilities/moveFiles";
import { CreateAreaUseCase } from "./CreateAreaUseCase";
class CreateAreaController {
  async handle(request: Request, response: Response) {
      const file = request?.file;
      console.log(file)
    const { value, label, image_url } = request.body;
    const createArea = new CreateAreaUseCase();
    
    const urlImage = moveFile(file, 'stacks', false,undefined, 'areas',label )

    const result = await createArea.execute({
      label,
      'image_url': `${urlImage}`,
      value
    });
    return response.status(201).json(result);
  }
}
export { CreateAreaController };
