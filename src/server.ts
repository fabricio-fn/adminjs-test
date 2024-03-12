import express from 'express';
import AdminJS from 'adminjs';
import { buildAuthenticatedRouter } from '@adminjs/express';
import cors from 'cors';

import provider from './admin/auth-provider.ts';
import options from './admin/options.ts';
import initializeDb from './db/index.ts';
import { routes } from './routes.ts';

const port = process.env.PORT || 3000;

const start = async () => {
  const app = express();

  app.use(cors());

  await initializeDb();

  const admin = new AdminJS(options);

  if (process.env.NODE_ENV === 'production') {
    await admin.initialize();
  } else {
    admin.watch();
  }

  const router = buildAuthenticatedRouter(
    admin,
    {
      cookiePassword: process.env.COOKIE_SECRET as string,
      cookieName: 'adminjs',
      provider,
    },
    null,
    {
      secret: process.env.COOKIE_SECRET,
      saveUninitialized: true,
      resave: true,
    },
  );

  app.use(express.json());

  app.use(admin.options.rootPath, router);

  app.use(routes);

  app.listen(port, () => {
    console.log(`AdminJS available at http://localhost:${port}${admin.options.rootPath}`);
  });
};

start();
