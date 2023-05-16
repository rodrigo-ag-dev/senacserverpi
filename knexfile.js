module.exports = {
  development: {
    client: process.env.DB_CLIENT || 'pg',
    connection: process.env.DB_CONNECTION || 'postgres://rodrigo-ag-dev:kmTL5EiHWX9x@ep-frosty-bird-907998.us-east-2.aws.neon.tech/senacpi?ssl=true',
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