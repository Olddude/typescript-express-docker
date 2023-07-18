import { Request, Response, NextFunction } from 'express'

import auth from '../auth'

function authInitialize(req: Request, res: Response, next: NextFunction): void {
  auth.initialize()(req, res, next)
}

export default authInitialize
