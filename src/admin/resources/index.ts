import { ResourceWithOptions } from 'adminjs';

import { Menu } from '../../db/models/Menu.js';
import { Category } from '../../db/models/Category.js';
import { User } from '../../db/models/User.js';

import { categoryResourceOptions } from './category.js';
import { menuResourceFeatures, menuResourceOptions } from './menu.js';
import { userResourceOptions } from './user.js';

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Category,
    options: categoryResourceOptions,
  },
  {
    resource: Menu,
    options: menuResourceOptions,
    features: menuResourceFeatures,
  },
  {
    resource: User,
    options: userResourceOptions,
  },
];
