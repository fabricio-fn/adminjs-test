import { Response } from 'express';

import { userService } from '../db/services/userService.js';
import { RequestWithUser } from '../middlewares/auth.js';

export const usersController = {
  show: async (req: RequestWithUser, res: Response) => {
    try {
      const currentUser = req.user!;
      return res.json(currentUser);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }

      return res.status(500).json({ message: 'Internal server error' });
    }
  },

  update: async (req: RequestWithUser, res: Response) => {
    const { user } = req;
    const {
      firstName,
      lastName,
      phone,
      birth,
      email,
    } = req.body;

    try {
      const updatedUser = await userService.update(user.id, {
        firstName,
        lastName,
        phone,
        birth,
        email,
      });

      return res.json(updatedUser);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }

      return res.status(500).json({ message: 'Internal server error' });
    }
  },
};
