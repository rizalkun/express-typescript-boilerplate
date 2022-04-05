import { NextFunction, Request, Response } from "express";
import { Zuwinda } from "../../providers/zuwinda";
import { AuthService } from "../../services/auth.service";
import { UserService } from "../../services/user.service";
import { userRegisterReq } from "../../utils/types";
import validateParams from "../../utils/helpers/validateParams";
import { BadRequestException, ForbiddenException } from "../../providers/exceptions";

const validatorUserRegister: userRegisterReq = {
    name: 'string',
    phone: 'string',
    password: 'string'
}

export default class RegisterController {
    async userRegister(req: Request, res: Response, next: NextFunction) {
        try {
            if (!validateParams(req.body, validatorUserRegister)) throw new BadRequestException()

            let payload: userRegisterReq = req.body

            /** hash password */
            payload.password = await AuthService.HashPassword(payload.password)

            let existing_user = await UserService.findOne({ phone: payload.phone })
           
            if (existing_user) throw new ForbiddenException('User already registered')
           
            let data = await UserService.create(payload)

            let otp = await AuthService.generateRandomNumber(6)

            /** send otp */
            Zuwinda.setTo(payload.phone).setMessage(`Your code verification is ${otp}`).sendWhatsapp()
            
            return res.json({
                success: true,
                message: 'Register successfully',
                data
            })
        } catch (error) {
            next(error)
        }
    }
}