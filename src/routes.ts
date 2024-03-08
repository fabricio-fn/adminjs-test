import express from 'express';

import { categoriesController } from './controllers/categoriesController.js';
import { menuController } from './controllers/menuController.js';
import { authController } from './controllers/authController.js';
import { usersController } from './controllers/usersController.js';
import { ensureAuth } from './middlewares/auth.js';

const routes = express.Router();

routes.post('/auth/register', authController.register);
routes.post('/auth/login', authController.login);

routes.get('/categories', categoriesController.index);
routes.get('/categories/:id', categoriesController.show);

routes.get('/menu/featured', menuController.featured);
routes.get('/menu/newest', menuController.newest);
routes.get('/menu/:id', menuController.show);

routes.get('/users/current', ensureAuth, usersController.show);
routes.put('/users/current', ensureAuth, usersController.update);

export { routes };
