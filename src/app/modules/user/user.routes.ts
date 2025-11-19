import express, { Request, Response } from "express"
import { UserController } from "./user.controller.js";

const router = express.Router()  

 




router.post('/create-user', UserController.createUserController)




export const UserRouter = router