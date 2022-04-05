export const JWT_SECRET = process.env.JWT_SECRET || 'CmmyvMUJCpXfppDk2q0mlvLggusbAW04cGuIzisXU3M='
export const MYSQL_URI = process.env.MYSQL_URI
export const REDIS_HOST = process.env.REDIS_HOST
export const REDIS_PASSWORD = process.env.REDIS_PASSWORD
export const REDIS_PORT = process.env.REDIS_PORT
export const REDIS_DB = process.env.REDIS_DB
export const REDIS_URI = `redis://:${REDIS_PASSWORD}@${REDIS_HOST}:${REDIS_PORT}/${REDIS_DB}`
export const ZUWINDA_TOKEN = process.env.ZUWINDA_TOKEN ? process.env.ZUWINDA_TOKEN : ''
export const ZUWINDA_INSTANCES_ID = process.env.ZUWINDA_INSTANCES_ID ? process.env.ZUWINDA_INSTANCES_ID : ''