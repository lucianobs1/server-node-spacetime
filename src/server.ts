import fastify from 'fastify';
import cors from '@fastify/cors';
import { memoryRoutes } from './routes/memories';

const app = fastify();
app.register(cors, {
  origin: true,
});

app.register(memoryRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('❤️‍🔥 Server is running ❤️‍🔥');
  });
