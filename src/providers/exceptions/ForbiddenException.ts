import HttpException from "./HttpException";

class ForbiddenException extends HttpException {
    constructor(message: string = 'Bad request') {
        super(403, message)
    }
}

export { ForbiddenException }