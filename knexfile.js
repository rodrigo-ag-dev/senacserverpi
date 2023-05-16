require('dotenv').config();

module.exports = {
  development: {
    client: process.env.NODE_DB_CLIENT,
    connection: process.env.NODE_DB_CONNECTION,
    migrations: { directory: './src/database/migrations' },
    useNullAsDefault: true,
  },

  staging: {
    client: process.env.NODE_DB_CLIENT,
    connection: process.env.NODE_DB_CONNECTION,
    migrations: { directory: './src/database/migrations' },
    useNullAsDefault: true,
  },

  production: {
    client: process.env.NODE_DB_CLIENT,
    connection: process.env.NODE_DB_CONNECTION,
    migrations: { directory: './src/database/migrations' },
    useNullAsDefault: true,
  }
};