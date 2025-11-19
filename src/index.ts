import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { UserRouter } from "./app/modules/user/user.routes.js";
const app: Application = express();
app.use(cors());
app.use(express.json());
dotenv.config();
//user route
app.use('/api/user',UserRouter)
//root route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
