import { Category } from './Category.ts';
import { Menu } from './Menu.ts';
import { User } from './User.ts';

Category.hasMany(Menu);
Menu.belongsTo(Category);

export { Category, Menu, User };
