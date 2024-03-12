import { AdminJSOptions } from 'adminjs';

import database from '../db/config.ts';

import componentLoader from './component-loader.ts';
import { adminJsResources } from './resources/index.ts';

const options: AdminJSOptions = {
  componentLoader,
  rootPath: '/admin',
  resources: adminJsResources,
  databases: [database],
};

export default options;
