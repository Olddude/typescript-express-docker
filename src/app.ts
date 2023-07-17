import express from 'express'

import routes from './routes'
import auth from './auth'
import errorHandling from './middlewares/error-handling'

const app = express()
app.use(auth.initialize())
app.use(routes)
app.use(errorHandling)

export default app
