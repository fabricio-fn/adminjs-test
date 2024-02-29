import { Category, Menu } from '../models/index.js';

export const menuService = {
  findByI: async (id: string) => {
    const menu = await Menu.findByPk(id, {
      attributes: ['id', 'name', 'description', 'thumbnailUrl', 'featured'],
      include: {
        model: Category,
        attributes: ['name'],
      },
    });

    return menu;
  },
};
