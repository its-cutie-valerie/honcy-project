import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { getDb } from './db/drizzle';
import factsRoutes from './routes/facts';

const app = new Hono<{ Bindings: Env }>(); // Add type for environment

// Enable CORS for all routes
app.use('*', cors());

// Middleware to initialize the database if not already set
app.use('*', async (c, next) => {
  if (!c.env.db) {
    const databaseUrl = c.env.DATABASE_URL;
    if (!databaseUrl) {
      return c.text('DATABASE_URL is not defined', 500);
    }
    c.env.db = getDb(databaseUrl);
  }
  await next();
});

// Use factsRoutes under `/facts`
app.route('/facts', factsRoutes);

// Default route
app.get('/', (c) => c.text('Welcome to The Honk Compendium!'));

export default app;
