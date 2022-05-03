import 'reflect-metadata'

import { MYSQL_URI } from '../../utils/constants'
import { DataSource } from 'typeorm';
import path from 'path'

export const dataSource = new DataSource({
    type: 'mysql',
    url: MYSQL_URI,
    entities: [path.join(__dirname, '../../**/*.model{.ts,.js}')],
    synchronize: true
})