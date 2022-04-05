import BaseService from "./base.service";
import { User } from '../models/user.model'

class UserService extends BaseService {

    private static instance: UserService;

    constructor() {
        super(User)
    }

    static get(): UserService {
        if (!UserService.instance) {
            UserService.instance = new UserService();
        }
        return UserService.instance;
    }

}

const userService = UserService.get();

export { userService as UserService }
