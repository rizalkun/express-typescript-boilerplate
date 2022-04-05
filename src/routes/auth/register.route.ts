import { Router } from 'express'
import RegisterController from '../../controllers/auth/register.controller'

const registerController = new RegisterController()

const RegisterRoutes = Router()

RegisterRoutes.post('/register', registerController.userRegister)

export { RegisterRoutes }