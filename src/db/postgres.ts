import { Pool } from 'pg';
import { logger } from '../helpers/logger';

export const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
});

pool.on('connect', client => {
  logger.info('Connected to Postgres');
  console.log('client', client);
});
pool.on('error', err => {
  logger.error(err);
});
