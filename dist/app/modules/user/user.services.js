import { UserModel } from "./user.model.js";
const createUserService = async (payload) => {
    const user = await UserModel.create(payload);
    return user;
};
const grtUserService = async () => {
    const getuser = await UserModel.find();
    return getuser;
};
export const UserService = {
    createUserService,
    grtUserService
};
//# sourceMappingURL=user.services.js.map