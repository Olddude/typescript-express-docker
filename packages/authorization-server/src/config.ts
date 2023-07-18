const config = {
  environment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || '8000',
  debugPort: process.env.DEBUG_PORT || '9229',
  host: process.env.HOST || 'localhost',
  protocol: process.env.PROTOCOL || 'https',
  cert: process.env.CERT || 'certificate.crt',
  key: process.env.KEY || 'private.key',
  dbHost: process.env.DB_HOST || 'localhost',
  dbPort: process.env.DB_PORT || '5432',
  dbUser: process.env.DB_USER || 'postgres',
  dbPassword: process.env.DB_PASSWORD || 'postgres',
  dbName: process.env.DB_NAME || 'mydatabase',
}

export default config
