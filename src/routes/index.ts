import { Router } from 'express'
import { userJwt } from '../providers/passport'
import { AuthRoutes } from './auth'
import { UserRoutes } from './user'

const AppRoutes = Router()

AppRoutes.use('/auth', AuthRoutes)
AppRoutes.use('/user', userJwt, UserRoutes)

export { AppRoutes }