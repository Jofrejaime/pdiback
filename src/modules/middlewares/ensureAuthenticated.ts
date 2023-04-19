import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../../errors/AppErrors";
import { prisma } from "../../prisma/clint";

export async function ensureAutenticated(
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
      include: {
        _count: true,
        'Following':{'include': {'Following':{'include':{'User':{'include':{'projects':true}}}}}},
        profile: {
          include: {
            _count: true,
            AreaofProfile: {
              include: {
                Area: true,
              },
            },
            LanguageOfProfile: {
              include: {
                Language: true,
              },
            },
            LinksOfProfile: {
              include: {
                'Link': true
              },
            },
            ToolofProfile: {
              include: {
                'Tool': true,
              },
            },
          },
        },
        projects: true,
      },
    });

    if (!user) {
      throw new AppError("User not exists", 401);
    }
    return response.json(user);
    next();
  } catch {
    throw new AppError("Invalid token!", 401);
  }
}
