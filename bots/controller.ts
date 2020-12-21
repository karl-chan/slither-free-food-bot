import puppeteer from 'puppeteer'
import Bot from './bot'
import { TargetState } from '../lib/index'
import { partition } from 'lodash'
import { Synchronize } from 'synchronize-decorator'

export default class Controller {
    private _bots: Bot[] = []

    private _browser: puppeteer.Browser

    async init () {
      const headless = process.env.NODE_ENV === 'production'
      this._browser = await puppeteer.launch({
        headless
      })
    }

    @Synchronize()
    async setTargetState (targetState: TargetState): Promise<void> {
      await this.terminateBots(targetState)
      await this.spawnBots(targetState)
      await this.moveBots(targetState)
    }

    private async spawnBots (targetState: TargetState): Promise<void> {
      const howMany = Math.max(0, targetState.numBots - this._bots.length)
      const location = targetState.location
      const newBots = await Promise.all(
        Array(howMany).fill('').map(i =>
          (async () => {
            const bot = new Bot({ name: location.name, server: location.server })
            await bot.spawn(this._browser)
            return bot
          })()
        )
      )
      this._bots.push(...newBots)
    }

    private async terminateBots (targetState: TargetState): Promise<void> {
      // terminate dead bots
      const isDeadBitmap = await Promise.all(this._bots.map(bot => bot.isDead()))
      const deadBots = this._bots.filter((bot, i) => isDeadBitmap[i])
      const aliveBots = this._bots.filter((bot, i) => !isDeadBitmap[i])
      await Promise.all(deadBots.map(bot => bot.terminate()))

      // terminate bots outside server
      const [validBots, invalidBots] = partition(aliveBots, bot => bot.name === targetState.location.name && bot.server === targetState.location.server)
      await Promise.all(invalidBots.map(bot => bot.terminate()))

      // terminate excess bots
      const excessBots = validBots.splice(0, Math.max(0, validBots.length - targetState.numBots))
      await Promise.all(excessBots.map(bot => bot.terminate()))

      this._bots = validBots
    }

    async moveBots (targetState: TargetState): Promise<void> {
      await Promise.all(this._bots.map(bot => bot.moveTo(targetState.location.coordinates)))
    }
}
