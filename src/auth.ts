import passport from 'passport'
import { BasicStrategy } from 'passport-http'
import { compareSync } from 'bcrypt'

import db from './db'

const auth = passport

auth.use(
  'basic',
  new BasicStrategy(async (username, password, done) => {
    try {
      const user = await db('users').where('username', username).first()
      if (!user || !compareSync(password, user.password)) {
        return done({ message: 'Incorrect username or password.' }, undefined)
      }
      return done(null, user)
    } catch (err) {
      return done(err)
    }
  })
)

export default auth
