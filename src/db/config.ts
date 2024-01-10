import { Dialect, Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const database = new Sequelize({
  username: process.env.DATABASE_USER as string,
  password: process.env.DATABASE_PASSWORD as string,
  dialect: process.env.DATABASE_DIALECT as Dialect,
  host: process.env.DATABASE_HOST as string,
  database: process.env.DATABASE_NAME as string,
  port: parseInt(process.env.DATABASE_PORT as string, 10),
  define: {
    freezeTableName: true,
  },
});

export default database;
