import 'reflect-metadata'

import { MYSQL_URI } from '../../utils/constants'
import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
    type: 'mysql',
    url: MYSQL_URI,
    entities: [
        'src/models/**/*.ts'
    ],
    synchronize: true
})