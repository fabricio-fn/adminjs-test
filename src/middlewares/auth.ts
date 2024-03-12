import { NextFunction, Request, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';

import { jwtService } from '../db/services/jwtService.ts';
import { userService } from '../db/services/userService.ts';
import { UserInstance } from '../db/models/User.ts';

export interface RequestWithUser extends Request {
  user?: UserInstance | null;
}

export function ensureAuth(req: RequestWithUser, res: Response, next: NextFunction) {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) return res.status(401).json({ message: 'Not authorized' });

  const token = authorizationHeader.replace(/Bearer /, '');

  jwtService.verifyToken(token, (err, decoded) => {
    if (err || typeof decoded === 'undefined') return res.status(401).json({ message: 'Unauthorized: invalid token' });

    userService.findByIdEmail((decoded as JwtPayload).email).then((user) => {
      req.user = user;
      next();
    });
  });
}
