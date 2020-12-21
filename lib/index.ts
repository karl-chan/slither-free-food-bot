import path from 'path'
import fs from 'fs'

export interface Coordinates {
    x: number,
    y: number
}

export interface Location {
    name: string,
    server: string,
    coordinates: Coordinates
}

export interface TargetState {
    location: Location,
    numBots: number
}

export const getCustomGameScript: (server: string) => string =
    (() => {
      const script : string = fs.readFileSync(path.resolve(__dirname, './game832434.js'), { encoding: 'utf-8' })
      return (server: string) => script.replace(/\{\{server\}\}/g, server)
    })()
