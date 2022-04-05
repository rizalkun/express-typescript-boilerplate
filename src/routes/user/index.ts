import { Router } from 'express'

import { ProfileRoutes } from './profile.route'

const UserRoutes = Router()

UserRoutes.use('/', ProfileRoutes)

export { UserRoutes }