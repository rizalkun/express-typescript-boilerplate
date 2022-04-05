import HttpException from '../exceptions/HttpException'
import { Request, Response, NextFunction } from 'express'

const errorHandler = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
    const success = error.success || false;
    const status = error.statusCode || 500;
    const message = error.message || 'Something went wrong';

    res.status(status).send({
        success,
        message,
        statusCode: status
    })
}
export default errorHandler