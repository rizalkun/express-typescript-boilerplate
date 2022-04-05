import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import passport from 'passport'
import { AppRoutes } from '../../routes'
import errorHandler from '../middlewares/errorHandler'

const createServer = (): express.Application => {

    const app = express()
    
    app.use(compression())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(helmet())
    app.use(cors())
    app.use(passport.initialize());
    require('../passport');

    app.use('/', AppRoutes)

    app.use(errorHandler)
    
    app.all('*', (req, res) => { return res.status(404).json('unknown routes') });

    return app;
}

export { createServer }