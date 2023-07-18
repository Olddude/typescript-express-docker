import http from 'node:http'
import https from 'node:https'
import fs from 'node:fs'

import app from './app'
import config from './config'

const { protocol, cert, key } = config

const server =
  protocol === 'https'
    ? https.createServer(
        {
          key: fs.readFileSync(key),
          cert: fs.readFileSync(cert),
        },
        app
      )
    : http.createServer(app)

export default server
