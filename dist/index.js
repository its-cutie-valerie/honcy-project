import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import factsRoutes from './routes/facts';
import { cors } from 'hono/cors';
const app = new Hono();
app.use('*', cors());
// Use routes
app.route('/facts', factsRoutes);
// Default route
app.get('/', (c) => c.text('Welcome to The Honk Compendium!'));
// Start the server
serve(app);
