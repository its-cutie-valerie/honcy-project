import { drizzle } from 'drizzle-orm/neon-serverless';
import { Pool } from '@neondatabase/serverless';
import * as schema from './schema';

export const getDb = (databaseUrl: string) => {
  const pool = new Pool({ connectionString: databaseUrl });
  return drizzle(pool, { schema });
};
