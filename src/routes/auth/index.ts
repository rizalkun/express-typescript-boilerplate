import { Router } from 'express'
import { LoginRoutes } from './login.route'
import { RegisterRoutes } from './register.route'

const AuthRoutes = Router()

AuthRoutes.use('/', RegisterRoutes)
AuthRoutes.use('/', LoginRoutes)

export { AuthRoutes }