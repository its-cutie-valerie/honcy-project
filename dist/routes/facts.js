import { Hono } from 'hono';
import db from '../db/drizzle';
import { facts } from '../db/schema';
const factsRoutes = new Hono();
factsRoutes.get('/', async (c) => {
    const allFacts = await db.select().from(facts);
    return c.json(allFacts);
});
factsRoutes.get('/random', async (c) => {
    const allFacts = await db.select().from(facts);
    if (allFacts.length === 0)
        return c.text('No facts available', 404);
    const randomFact = allFacts[Math.floor(Math.random() * allFacts.length)];
    return c.json(randomFact);
});
// factsRoutes.post('/', async (c) => {
//   const body = await c.req.json();
//   const newFact = await db.insert(facts).values(body).returning();
//   return c.json(newFact, 201);
// });
// factsRoutes.delete('/:id', async (c) => {
//   const id = c.req.param('id');
//   await db.delete(facts).where(eq(facts.id, id));
//   return c.text('Fact deleted', 200);
// });
export default factsRoutes;
