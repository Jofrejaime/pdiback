import { prisma } from "../../../../prisma/clint";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { AppError } from "../../../../errors/AppErrors";
interface IRequest {
  password: string;
  userName: string;
}
interface IResponse {
  user: {
    id: string
    email: string
    userName: string;
  };
  token: string;
}
export class AuthenticateUserUseCase {
  async execute({ password, userName }: IRequest): Promise<IResponse> {
    const user = await prisma.user.findUnique({
      where: { userName: userName }
    });
    if (!user) {
      throw new AppError("user or password are incorrect");
    }
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new AppError("user or password are incorrect!");
    }
    const token = sign({}, "ba16da3f64afdf9f0b38ad895009fe2f", {
      subject: user.id,
      expiresIn: "1d",
    });
    const tokenReturn:  IResponse = {
      token,
      user:{
        id: user.id,
        email: user.email,
        userName: user.userName,
      }
    }
    return tokenReturn;
  }
}
