import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core';

export const facts = pgTable('facts', {
  id: uuid('id').primaryKey().defaultRandom(),
  fact: text('fact').notNull(),
  source: text('source'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
