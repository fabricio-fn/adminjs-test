import { Request, Response } from 'express';

import { menuService } from '../db/services/menuService.js';

export const menuController = {
  show: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const menu = await menuService.findByI(id);

      if (!menu) {
        return res.status(404).json({ message: 'Not found' });
      }

      return res.json(menu);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }

      return res.status(500).json({ message: 'Internal server error' });
    }
  },
};
