import { Request, Response } from 'express';

import { userService } from '../db/services/userService.js';

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
};
