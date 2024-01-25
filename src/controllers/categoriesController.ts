import { Request, Response } from 'express';

import { Category } from '../db/models/Category.js';

export const categoriesController = {
  index: async (req: Request, res: Response) => {
    try {
      const categories = await Category.findAll({
        attributes: ['id', 'name'],
      });

      return res.json(categories);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }

      return res.status(500).json({ message: 'Internal server error' });
    }
  },
};
