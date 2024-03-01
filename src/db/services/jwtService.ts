import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

export const jwtService = {
  signToken: (payload: string | object | Buffer, expiration: string) => jwt.sign(payload, secret, {
    expiresIn: expiration,
  }),
};
