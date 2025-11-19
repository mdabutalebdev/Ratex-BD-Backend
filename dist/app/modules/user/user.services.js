import { UserModel } from "./user.model.js";
const createUserService = async (payload) => {
    const user = await UserModel.create(payload);
    return user;
};
export const UserService = {
    createUserService
};
//# sourceMappingURL=user.services.js.map