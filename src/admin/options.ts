import { AdminJSOptions } from 'adminjs';

import database from '../db/config.js';

import componentLoader from './component-loader.js';
import { adminJsResources } from './resources/index.js';

const options: AdminJSOptions = {
  componentLoader,
  rootPath: '/admin',
  resources: adminJsResources,
  databases: [database],
};

export default options;
