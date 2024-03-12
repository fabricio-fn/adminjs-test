import { Category, Menu } from '../models/index.ts';

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

  getRandomFeaturedMenu: async () => {
    const featuredMenu = await Menu.findAll({
      attributes: ['id', 'name', 'description', 'thumbnailUrl', 'featured'],
      where: {
        featured: true,
      },
    });

    const randomFeaturedMenu = featuredMenu.sort(() => 0.5 - Math.random());

    return randomFeaturedMenu.slice(0, 6);
  },

  getTopSixNewest: async () => {
    const menu = await Menu.findAll({
      limit: 6,
      order: [['createdAt', 'DESC']],
      attributes: ['id', 'name', 'description', 'thumbnailUrl', 'featured'],
    });

    return menu;
  },
};
