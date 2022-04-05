import HttpException from "./HttpException";

class UserEmailAlreadyExistException extends HttpException {
    constructor(email: string) {
        super(400, `Email ${email} already exists`)
    }
}

export { UserEmailAlreadyExistException }