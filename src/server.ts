import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { routes } from "./routes";
import { AppError } from "./errors/AppErrors";
import { serverHttp } from "./websocket";
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message });
    }
    return response.status(500).json({
      status: "error",
      message: `Internal server error ${err.message}`,
    });
  }
);
serverHttp.listen(3003, () => {
  console.log("RUNNING 3003");
});
app.listen(3001, () => console.log("SERVER RUNNING IN PORT 3001"));

