export class UserController {
    static async createUser(user) {
        await createUser(user);
    }
}
import { createUser, } from "../database/userDB";
