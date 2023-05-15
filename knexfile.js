module.exports = {
  development: {
    client: process.env.DB_CLIENT || 'pg',
    connection: process.env.DB_CONNECTION,
    migrations: { directory: './src/database/migrations' },
    useNullAsDefault: true,
  },

  staging: {
    client: process.env.DB_CLIENT || 'pg',
    connection: process.env.DB_CONNECTION,
    migrations: { directory: './src/database/migrations' },
    useNullAsDefault: true,
  },

  production: {
    client: process.env.DB_CLIENT || 'pg',
    connection: process.env.DB_CONNECTION,
    migrations: { directory: './src/database/migrations' },
    useNullAsDefault: true,
  }
};