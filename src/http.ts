import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const serverHttp = http.createServer(app);
//const io = new Server(serverHttp);
const io = new Server(serverHttp,{cors:{}} )
/*const io = require("socket.io")(
  3002,
  //() => console.log("SOCKET RUN IN PORT 3002"),
  {
    cors: {
      origin: "http://localhost:3000",
    },
  }
);*/
export { serverHttp, io, app };
