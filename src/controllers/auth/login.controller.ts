import { NextFunction, Request, Response } from "express";
import { BadRequestException, NotFoundException } from "../../providers/exceptions";
import { AuthService } from "../../services/auth.service";
import { UserService } from "../../services/user.service";
import validateParams from "../../utils/helpers/validateParams";
import { userLoginReq } from "../../utils/types";

const validatorUserLogin: userLoginReq = {
    phone: 'string',
    password: 'string'
}

export default class LoginController {
    async loginUser(req: Request, res: Response, next: NextFunction) {
        try {
            if (!validateParams(req.body, validatorUserLogin)) throw new BadRequestException()

            let payload: userLoginReq = req.body

            let user= await UserService.findOne({ phone: payload.phone })
            
            if(!user) throw new NotFoundException('User not found')

            let token = await AuthService.CompareHashPassword(payload.phone, payload.password, user.password)
            
            return res.json({
                success: true,
                message: 'Login successfully',
                data: {
                    access_token: token
                }
            })
        } catch (error) {
            next(error)
        }
    }
}