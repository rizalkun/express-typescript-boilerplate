import { NextFunction, Request, Response } from "express";
import { UserService } from "../../services/user.service";

export default class ProfileController {
    async getProfile(req: Request, res: Response, next: NextFunction) {
        try {
            let profile = await UserService.findOne({ id: req.userId });
            delete profile.password

            return res.status(200).json({
                success: true,
                data: profile
            })
        } catch (error) {
            next(error)
        }
    }
}