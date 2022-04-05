import HttpException from "./HttpException";

class BadRequestException extends HttpException {
    constructor(message = 'Bad request') {
        super(400, message)
    }
}

export { BadRequestException }