import { Router } from 'express'
import db from '../db'
import authAuthentificate from '../middlewares/auth-authentificate'
import logger from '../logger'
import config from '../config'

const routes = Router()

routes.get('/setup', async (req, res, next) => {
  try {
    logger.info(`%j`, config)
    await db.migrate.latest()
    res.json({ message: 'success' })
  } catch (error) {
    next(error)
  }
})

routes.get('/users', authAuthentificate, async (req, res, next) => {
  try {
    const users = await db('users').select()
    res.json(users)
  } catch (err) {
    next(err)
  }
})

routes.get('/teardown', async (req, res, next) => {
  try {
    await db.migrate.down()
    res.json({ message: 'success' })
  } catch (error) {
    next(error)
  }
})

export default routes
