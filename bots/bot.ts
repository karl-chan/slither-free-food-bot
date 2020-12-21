import { Coordinates, getCustomGameScript } from '../lib/index'
import puppeteer from 'puppeteer'

export default class Bot {
    private static _nextId = 0

    private _id: number
    private _name: string
    private _server: string

    private _page: puppeteer.Page

    constructor ({ name, server }: { name: string, server: string }) {
      this._id = Bot._nextId++
      this._name = name
      this._server = server
    }

    get name (): string {
      return this._name
    }

    get server (): string {
      return this._server
    }

    async spawn (browser: puppeteer.Browser): Promise<void> {
      this._page = await browser.newPage()

      await this.interceptGameScript(this._page, this._server)
      await this._page.goto('https://slither.io')
      await this._page.waitForSelector('#nick')
      await this._page.type('#nick', this._name)
      await this._page.click('#playh .nsi')
    }

    private async interceptGameScript (page: puppeteer.Page, server: string) {
      await page.setRequestInterception(true)
      page.on('request', interceptedRequest => {
        if (interceptedRequest.url().endsWith('game832434.js')) {
          const script = getCustomGameScript(server)
          interceptedRequest.respond({
            contentType: 'text/javascript',
            body: script
          })
          return
        }
        interceptedRequest.continue()
      })
    }

    private async currentCoordinates (): Promise<Coordinates> {
      // @ts-ignore
      const { x, y } = await this._page.evaluate(() => ({ x: window.view_xx, y: window.view_yy }))
      console.log(`Server: ${this._server} Bot: #${this._id} X: ${x} Y: ${y}`)
      return { x, y }
    }

    private async changeMouseDirection (currentCoordinates: Coordinates, targetCoordinates: Coordinates): Promise<void> {
      // @ts-ignore
      const gsc = await this._page.evaluate(() => window.gsc)
      const mouseX = (targetCoordinates.x - currentCoordinates.x) * gsc
      const mouseY = (targetCoordinates.y - currentCoordinates.y) * gsc
      await this._page.evaluate((xm, ym) => {
        // @ts-ignore
        window.xm = xm
        // @ts-ignore
        window.ym = ym
      }, mouseX, mouseY)
    }

    async moveTo (targetCoordinates: Coordinates): Promise<void> {
      const currentCoordinates = await this.currentCoordinates()
      await this.changeMouseDirection(currentCoordinates, targetCoordinates)
    }

    async isDead (): Promise<boolean> {
      return this._page.evaluate(() => {
        // @ts-ignore
        return !window.playing
      })
    }

    async terminate (): Promise<void> {
      await this._page.close()
    }
}
