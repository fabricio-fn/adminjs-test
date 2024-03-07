import { Response } from 'express';
import { RequestWithUser } from 'src/middlewares/auth.js';

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
};
