import { ResourceWithOptions } from 'adminjs';

import { Menu } from '../../db/models/Menu.js';
import { Category } from '../../db/models/Category.js';

import { categoryResourceOptions } from './category.js';
import { menuResourceOptions } from './menu.js';

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Category,
    options: categoryResourceOptions,
  },
  {
    resource: Menu,
    options: menuResourceOptions,
  },
];
