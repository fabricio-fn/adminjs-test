import { Request, Response } from 'express';

import { userService } from '../db/services/userService.js';
import { jwtService } from '../db/services/jwtService.js';

export const authController = {
  register: async (req: Request, res: Response) => {
    const {
      firstName,
      lastName,
      phone,
      birth,
      email,
      password,
    } = req.body;

    try {
      const userAlreadyExists = await userService.findByIdEmail(email);

      if (userAlreadyExists) {
        throw new Error('This email is already registered!');
      }

      const user = await userService.create({
        firstName,
        lastName,
        phone,
        birth,
        email,
        password,
        role: 'user',
      });

      return res.status(201).json(user);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }

      return res.status(500).json({ message: 'Internal server error' });
    }
  },

  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
      const user = await userService.findByIdEmail(email);

      if (!user) return res.status(404).json({ message: 'Email not found!' });

      user.checkPassword(password, (err, isSame) => {
        if (err) return res.status(400).json({ message: err.message });

        if (!isSame) return res.status(401).json({ message: 'Invalid password!' });

        const payload = {
          id: user.id,
          firstName: user.firstName,
          email: user.email,
        };

        const token = jwtService.signToken(payload, '1d');

        return res.json({ authenticated: true, ...payload, token });
      });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }

      return res.status(500).json({ message: 'Internal server error' });
    }
  },
};
