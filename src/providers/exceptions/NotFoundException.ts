import HttpException from "./HttpException";

class NotFoundException extends HttpException {
    constructor(message: string = `Data not found`) {
        super(404, message)
    }
}

export { NotFoundException }