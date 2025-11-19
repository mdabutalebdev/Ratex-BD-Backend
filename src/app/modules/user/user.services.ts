import { InterfaceUser } from "./user.interface.js";
import { UserModel } from "./user.model.js";



const createUserService = async (payload:InterfaceUser)=>{
  const user = await UserModel.create(payload)   
  return user
}

export const  UserService = {
   createUserService 
}