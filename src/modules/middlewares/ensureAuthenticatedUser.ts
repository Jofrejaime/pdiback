import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../../errors/AppErrors";
import { prisma } from "../../prisma/clint";

export async function ensureAutenticatedUser(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }
  //bearer - 3456765432gf43tg56-45684553
  const [, token] = authHeader.split(" ");
  try {
    const { sub: userId } = verify(token, "ba16da3f64afdf9f0b38ad895009fe2f");
    const user = await prisma.user.findUnique({
      where: { id: userId?.toString() },
    });

    if (!user) {
      throw new AppError("User not exists", 401);
    }
    next();
  } catch {
    throw new AppError("Invalid token!", 401);
  }
}
