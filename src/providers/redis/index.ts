import { REDIS_URI } from '../../utils/constants'
import { createClient, RedisClientOptions } from 'redis'

const options: RedisClientOptions = {
    url: REDIS_URI
}

const client = createClient(options)

client.connect()

const publisher = client.duplicate()

publisher.connect()

const subscriber = client.duplicate()

subscriber.connect()

client.on('error', (err) => console.log('Redis Client Error', err));

export { client, publisher, subscriber }