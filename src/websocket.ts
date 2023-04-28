import { Server } from "socket.io";
import { serverHttp } from "./http";
const io = new Server(serverHttp, { cors: {} });
import { Comment, Message, Notification } from "@prisma/client";

interface RoomUser {
  socketId: string;
  username: string;
}

let logedUsers: RoomUser[] = [];
let listMessage: Message[] = [];
let listComment: Comment[] = [];
let listNotification: Notification[] = [];
io.on("connection", (socket: any) => {
  socket.on("login", ({ username }: any) => {
    if (username) {
      const exists = logedUsers.some((user) => user.username === username);
      if (!exists) {
        logedUsers.push({
          username: username,
          socketId: socket.id,
        });
      }
    }
    io.emit("getUsers", logedUsers);
  });
  socket.on("logout", ({ username }: any) => {
    if (username) {
      if (logedUsers.some((user) => user.username === username)) {
        const user = logedUsers.find((user) => user.username === username);
        const users = logedUsers.filter((useri) => useri !== user);
        logedUsers = users;
      }
    }
  });
  socket.on("disconnect", () => {
    logedUsers = logedUsers.filter((user) => user !== socket.id);
    io.emit("getUsers", logedUsers);
  });
  io.emit("getUsers", logedUsers);

  socket.on("message", (data: Message) => {
    listMessage.push(data);
    io.emit("message", data);
  });
  socket.on("comment", (data: Comment) => {
    listComment.push(data);
    io.emit("comment", data);
  });
  socket.on("notification", (data: Notification) => {
   
    listNotification.push(data);
    io.emit("notification", data);
  });
});
