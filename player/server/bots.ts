import axios, { AxiosRequestConfig } from 'axios'

import { TargetState, Location } from '../../lib/index'
import { hosts } from '../../bots.json'

export async function moveBots (location: Location): Promise<void> {
  await Promise.all(hosts.map(host => {
    const config = <AxiosRequestConfig> {
      url: '/move-bots',
      baseURL: host.site,
      method: 'POST',
      data: <TargetState>{
        location,
        numBots: host.num
      }
    }
    return axios
      .request(config)
      .catch(err => console.error(`Failed to contact host ${host.site}. Reason: ${err.message}`))
  }))
}
