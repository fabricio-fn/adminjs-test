import { Request, Response } from 'express';

import { categoryService } from '../db/services/categoryService.ts';
import { Category } from '../db/models/Category.ts';

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

  show: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const category = await categoryService.findByIdWithMenu(id);
      return res.json(category);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }

      return res.status(500).json({ message: 'Internal server error' });
    }
  },
};
