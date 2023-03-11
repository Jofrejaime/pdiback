import express from "express";
import cors from 'cors';
import { routes } from "./routes";

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(routes)
app.listen(3001, ()=> console.log("SERVER RUNNING IN PORT 3001"))