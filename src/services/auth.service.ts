import { NotAuthorizationException } from "../providers/exceptions/NotAuthorizationException";

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

class AuthService {

    private static instance: AuthService;

    private saltRounds
    private jwtSecret

    constructor() {
        this.saltRounds = 10
        this.jwtSecret = process.env.JWT_SECRET || ''
    }

    static get(): AuthService {
        if (!AuthService.instance) {
            AuthService.instance = new AuthService();
        }
        return AuthService.instance;
    }

    async HashPassword(password: string): Promise<string> {
        return bcrypt.hashSync(password, this.saltRounds)
    }

    async CompareHashPassword(email: string, password: string, hashPassword: string): Promise<string> {
        
        const validationPassword = bcrypt.compareSync(password, hashPassword);
        
        if (!validationPassword) throw new NotAuthorizationException('Invalid credentials')
        
        return this.generateTokenSignIn(email)
    }

    async generateTokenSignIn(phone: string): Promise<string> {
        return jwt.sign({ phone }, this.jwtSecret, { algorithm: 'HS256', expiresIn: '365d' })
    }

    async generateRandomNumber(length: number) {
        return ("0".repeat(length) + Math.floor(Math.random() * 10 ** length)).slice(-length)
    }

}

const authService = AuthService.get();

export { authService as AuthService }
