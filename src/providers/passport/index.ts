import passport from 'passport'
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import { JWT_SECRET } from '../../utils/constants';
import { UserService } from '../../services/user.service';
import { NextFunction, Request, Response } from 'express';
import { NotAuthorizationException } from '../exceptions/NotAuthorizationException';

declare global {
    namespace Express {
        export interface Request {
            userId?: number
        }
    }
}

const jwtOpts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET,
};

passport.use('user',
    new JWTStrategy(jwtOpts, async (payload, done) => {
        try {
            let user = await UserService.findOne({ phone: payload.phone })
            if (!user) {
                return done(null, false, { success: false, message: 'Unauthorized', statusCode: 401 })
            }
            return done(null, user)
        } catch (e) {
            return done(e, false);
        }
    })
)

export const userJwt = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('user', { session: false }, (err, user, info) => {
        if (err || !user) {
            return next(new NotAuthorizationException)
        }
        req.userId = user.id
        req.user = user
        return next()
    })(req, res, next)
}