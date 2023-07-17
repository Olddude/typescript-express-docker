import express from 'express'

import routes from './routes'
import errorHandling from './middlewares/error-handling'
import authInitialize from './middlewares/auth-initialize'

const app = express()
app.use(authInitialize)
app.use(routes)
app.use(errorHandling)

export default app
