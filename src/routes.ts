import express from 'express';

import { categoriesController } from './controllers/categoriesController.ts';
import { menuController } from './controllers/menuController.ts';
import { authController } from './controllers/authController.ts';
import { usersController } from './controllers/usersController.ts';
import { ensureAuth } from './middlewares/auth.ts';

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
routes.put('/users/current/password', ensureAuth, usersController.updatePassword);

export { routes };
