import { ResourceWithOptions } from 'adminjs';

import { Menu } from '../../db/models/Menu.ts';
import { Category } from '../../db/models/Category.ts';
import { User } from '../../db/models/User.ts';

import { categoryResourceOptions } from './category.ts';
import { menuResourceFeatures, menuResourceOptions } from './menu.ts';
import { userResourceOptions } from './user.ts';

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
