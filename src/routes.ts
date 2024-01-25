import express from 'express';

import { categoriesController } from './controllers/categoriesController.js';

const routes = express.Router();

routes.get('/categories', categoriesController.index);

export { routes };
