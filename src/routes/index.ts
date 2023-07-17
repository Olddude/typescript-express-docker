import { Router } from 'express'
import db from '../db'

const routes = Router()

routes.get('/setup', async (req, res, next) => {
  try {
    await db.migrate.latest()
    res.json({ message: 'success' })
  } catch (error) {
    next(error)
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
