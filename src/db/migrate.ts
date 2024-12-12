import db from './drizzle';
import { sql } from 'drizzle-orm';

async function migrate() {
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS facts (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      fact TEXT NOT NULL,
      source TEXT,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `);
  console.log('Migration complete!');
}

migrate();
