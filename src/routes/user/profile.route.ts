import { Router } from 'express'
import ProfileController from '../../controllers/user/profile.controller'

const profileController = new ProfileController()

const ProfileRoutes = Router()

ProfileRoutes.get('/', profileController.getProfile)

export { ProfileRoutes }