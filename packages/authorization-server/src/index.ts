import config from './config'
import logger from './logger'
import server from './server'

logger.info(config)

const { port, host, protocol } = config

server.listen(port, async () => {
  logger.info(`listening on ${protocol}://${host}:${port}`)
})
