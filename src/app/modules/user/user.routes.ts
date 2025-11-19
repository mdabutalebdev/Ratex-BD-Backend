import express, { Request, Response } from "express"
import { UserController } from "./user.controller.js";

const router = express.Router()  

 




router.post('/create-user', UserController.createUserController)
router.get('/', UserController.getUserController)




export const UserRouter = router