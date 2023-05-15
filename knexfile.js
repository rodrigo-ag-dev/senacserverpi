module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DB_CONNECTION,
    migrations: { directory: './src/database/migrations' },
    useNullAsDefault: true,
  },

  staging: {
    client: 'pg',
    connection: process.env.DB_CONNECTION,
    migrations: { directory: './src/database/migrations' },
    useNullAsDefault: true,
  },

  production: {
    client: 'pg',
    connection: process.env.DB_CONNECTION,
    migrations: { directory: './src/database/migrations' },
    useNullAsDefault: true,
  }
};