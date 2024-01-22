import { Category } from './Category.js';
import { Menu } from './Menu.js';
import { User } from './User.js';

Category.hasMany(Menu);
Menu.belongsTo(Category);

export { Category, Menu, User };
