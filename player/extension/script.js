const UPDATE_INTERVAL = 5000 // every 5 seconds

const playerSocket = new WebSocket('ws://localhost:12345/player-location')

function sendPlayerLocation () {
  if (window.playing) {
    const name = window.my_nick
    const server = `${window.bso.ip}:${window.bso.po}`
    const x = window.view_xx
    const y = window.view_yy

    const location = {
      name,
      server,
      coordinates: {
        x,
        y
      }
    }
    playerSocket.send(JSON.stringify(location))
  }
}

setInterval(sendPlayerLocation, UPDATE_INTERVAL)
