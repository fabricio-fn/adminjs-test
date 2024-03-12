### About

This project utilizes the [AdminJS](https://docs.adminjs.co/) library, which is a frontend library for building admin panels in Node.js applications. It provides a user-friendly interface for managing data, including CRUD (Create, Read, Update, Delete) operations.

### Routes

| Route             | HTTP Method | Parameters | Description                    |
| ----------------- | ----------- | ---------- | ------------------------------ |
| `/auth/register`  | POST        | -          | Register a new user            |
| `/auth/login`     | POST        | -          | Login user                     |
| `/categories`     | GET         | -          | Get all categories             |
| `/categories/:id` | GET         | `:id`      | Get a specific category        |
| `/menu/featured`  | GET         | -          | Get featured menu items        |
| `/menu/newest`    | GET         | -          | Get newest menu items          |
| `/menu/:id`       | GET         | `:id`      | Get a specific menu item       |
| `/users/current`  | GET         | -          | Get current user information   |
| `/users/current`  | PUT         | -          | Update current user information|
| `/users/current/password` | PUT  | -          | Update current user password   |

Example of request body for POST /auth/register:

```json
{
  "name": "john doe",
  "email": "johndoe@email.com",
  "password": "password123"
}
```

Example of request body for PUT /users/current:

```json
{
  "name": "john doe"
}
```

### Technologies

- [AdminJS](https://adminjs.com/)
- [Node.js](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Sequelize](https://sequelize.org/)
- [PostgresSQL](https://www.postgresql.org/docs/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

### Want to try it out on your machine?

### Requirements

- [Node.js](https://nodejs.org/en)
- [PostgresSQL](https://www.postgresql.org/docs/)

To clone the repository and view it locally, the user can follow these steps:

```bash
git clone https://github.com/fabricio-fn/adminjs-test.git
```

Or download the project as a zip file by clicking [here](https://github.com/fabricio-fn/adminjs-test/archive/refs/heads/main.zip)

Go to the project folder and use the command below to install the dependencies

```bash
npm install
```

Rename the .env.example file to .env.local and fill it with your values

Create the database (if it does not exist yet):

```bash
npx sequelize-cli db:create
```

If you encounter this error

```bash
Sequelize CLI [Node: 20.9.0, CLI: 6.6.2, ORM: 6.35.2]

Loaded configuration file "sequelize.js".
Using environment "development".

ERROR: password authentication failed for user "userTest"
```

you will need to manually create it from the PostgresSQL command line

```bash
CREATE USER new_user WITH PASSWORD 'password' CREATEDB;
```

Run migrations to create tables in the database:

```bash
npx sequelize-cli db:migrate
```

You can populate the database with some categories or create them in the admin panel at the /admin route

```bash
npx sequelize-cli db:seed:all
```

Start the server locally:

```bash
npm run dev
```

Now you should be able to test the http routes and access the admin panel at the /admin route.