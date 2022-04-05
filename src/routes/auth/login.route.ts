import { Router } from 'express'
import LoginController from '../../controllers/auth/login.controller'

const loginController = new LoginController()

const LoginRoutes = Router()

LoginRoutes.post('/login', loginController.loginUser)

export { LoginRoutes }