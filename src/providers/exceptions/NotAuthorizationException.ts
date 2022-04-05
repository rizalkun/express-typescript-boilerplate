import HttpException from "./HttpException";

class NotAuthorizationException extends HttpException {
    constructor(message: string = 'Not authorization') {
        super(401, message)
    }
}

export { NotAuthorizationException }