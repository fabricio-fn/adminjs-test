import { Category } from './Category.js';
import { Menu } from './Menu.js';

Category.hasMany(Menu);
Menu.belongsTo(Category);

export { Category, Menu };
