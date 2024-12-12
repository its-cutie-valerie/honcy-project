import { Hono } from 'hono';
import { eq } from 'drizzle-orm';
import { facts } from '../db/schema';

const factsRoutes = new Hono<{ Bindings: Env }>();

factsRoutes.get('/', async (c) => {
  try {
    const page = parseInt(c.req.query('page') || '1', 10);
    const limit = parseInt(c.req.query('limit') || '10', 10);
    const offset = (page - 1) * limit;

    const allFacts = await c.env.db.select().from(facts).limit(limit).offset(offset);
    return c.json(allFacts);
  } catch (error) {
    console.error(error);
    return c.text('Internal Server Error', 500);
  }
});

factsRoutes.get('/random', async (c) => {
  try {
    const allFacts = await c.env.db.select().from(facts);
    if (allFacts.length === 0) return c.text('No facts available', 404);
    const randomFact = allFacts[Math.floor(Math.random() * allFacts.length)];
    return c.json(randomFact);
  } catch (error) {
    console.error(error);
    return c.text('Internal Server Error', 500);
  }
});

factsRoutes.post('/', async (c) => {
  try {
    const body = await c.req.json();
    if (!body.fact) {
      return c.text('Fact is required', 400);
    }
    const newFact = await c.env.db.insert(facts).values(body).returning();
    return c.json(newFact, 201);
  } catch (error) {
    console.error(error);
    return c.text('Internal Server Error', 500);
  }
});

factsRoutes.delete('/:id', async (c) => {
  try {
    const id = c.req.param('id');
    if (!id) {
      return c.text('ID is required', 400);
    }
    const result = await c.env.db.delete(facts).where(eq(facts.id, id)).returning();
    if (result.length === 0) {
      return c.text('Fact not found', 404);
    }
    return c.text('Fact deleted', 200);
  } catch (error) {
    console.error(error);
    return c.text('Internal Server Error', 500);
  }
});

export default factsRoutes;
