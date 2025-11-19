import { InterfaceUser } from "./user.interface.js";
export declare const UserService: {
    createUserService: (payload: InterfaceUser) => Promise<import("mongoose").Document<unknown, {}, InterfaceUser, {}, import("mongoose").DefaultSchemaOptions> & InterfaceUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    grtUserService: () => Promise<(import("mongoose").Document<unknown, {}, InterfaceUser, {}, import("mongoose").DefaultSchemaOptions> & InterfaceUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
};
//# sourceMappingURL=user.services.d.ts.map