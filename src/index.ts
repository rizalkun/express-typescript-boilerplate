import 'module-alias/register'

import { config } from 'dotenv'
config()

import { dataSource } from './providers/mysql'

import { createServer } from './providers/express'
import http from 'http'
import { AddressInfo } from 'net'
import chalk from 'chalk'

(async () => {

    const host = process.env.HOST || '127.0.0.1'
    const port = process.env.PORT || '3000'

    await dataSource.initialize()

    const app = createServer()

    const server = http.createServer(app).listen({ host, port }, () => {
        const addressInfo = server.address() as AddressInfo
        console.log(
            chalk.green.bold(
                `
Yep this is working 🍺
App listen on: http://${addressInfo.address}:${addressInfo.port} 🍕
Env: ${process.env.NODE_ENV} 🦄
                `,
            ),
        );
    })
})()