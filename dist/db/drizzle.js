import { drizzle } from 'drizzle-orm/neon-serverless';
import { Pool } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';
import * as schema from './schema';
// Load environment variables
dotenv.config();
// Use Neon Pool for database connection
const connectionString = process.env.DATABASE_URL || '';
const pool = new Pool({ connectionString });
const db = drizzle(pool, { schema });
export default db;
