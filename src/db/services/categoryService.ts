import { Category, Menu } from '../models/index.js';

export const categoryService = {
  findByIdWithMenu: async (id: string) => {
    const categoryWithMenu = await Category.findByPk(id, {
      attributes: ['id', 'name'],
      include: {
        model: Menu,
        attributes: ['id', 'name', 'description', 'thumbnailUrl', 'featured'],
      },
    });

    return categoryWithMenu;
  },
};
