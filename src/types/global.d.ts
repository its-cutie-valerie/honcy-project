import { Database } from 'drizzle-orm';

declare global {
  interface Env {
    DATABASE_URL: string;
    db?: Database; // Add `db` for runtime injection
  }
}
