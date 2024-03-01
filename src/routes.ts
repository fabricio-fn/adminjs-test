import express from 'express';

import { categoriesController } from './controllers/categoriesController.js';
import { menuController } from './controllers/menuController.js';
import { authController } from './controllers/authController.js';

const routes = express.Router();

routes.post('/auth/register', authController.register);

routes.get('/categories', categoriesController.index);
routes.get('/categories/:id', categoriesController.show);

routes.get('/menu/:id', menuController.show);

export { routes };
