import Controller from './controller'
import Fastify from 'fastify'
import { TargetState } from '../lib/index'

const PORT = process.env.port || 8080

const controller = new Controller()
controller.init()

const fastify = Fastify({ logger: true })

fastify.post('/move-bots', async (request, reply) => {
  // @ts-ignore
  const targetState: TargetState = request.body
  await controller.setTargetState(targetState)
  reply.send()
})

fastify.listen(PORT)
