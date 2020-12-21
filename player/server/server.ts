import { Location } from '../../lib/index'
import Fastify from 'fastify'
import FastifyWs from 'fastify-websocket'
import { moveBots as moveBotsTo } from './bots'

const server = Fastify({ logger: true })
server.register(FastifyWs)

server.get('/player-location', { websocket: true }, async (connection, req) => {
  connection.socket.on('message', async (msg: string) => {
    const location: Location = JSON.parse(msg)
    await moveBotsTo(location)
  })
})

server.listen(12345)
