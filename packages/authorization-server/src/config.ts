const config = {
  environment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || '8001',
  debugPort: process.env.DEBUG_PORT || '9230',
  host: process.env.HOST || 'localhost',
  protocol: process.env.PROTOCOL || 'https',
  cert: process.env.CERT || 'certificate.crt',
  key: process.env.KEY || 'private.key',
  dbHost: process.env.DB_HOST || 'authorization-db',
  dbPort: process.env.DB_PORT || '5433',
  dbUser: process.env.DB_USER || 'postgres',
  dbPassword: process.env.DB_PASSWORD || 'postgres',
  dbName: process.env.DB_NAME || 'authorization-db',
}

export default config
