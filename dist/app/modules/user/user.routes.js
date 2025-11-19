import express from "express";
import { UserController } from "./user.controller.js";
const router = express.Router();
const userData = {
    id: "usr_001",
    email: "mdabutaleb.dev@gmail.com",
    password: "abu_password_123",
    isPasswordChange: false,
    role: "student",
    status: "active",
    isDeleted: false
};
router.post('/create-user', UserController.createUserController);
export const UserRouter = router;
//# sourceMappingURL=user.routes.js.map