import 'dotenv/config';

import fastify from 'fastify';
import multipart from '@fastify/multipart';
import cors from '@fastify/cors';
import jwt from '@fastify/jwt';
import { memoriesRoutes } from './routes/memories';
import { authRoutes } from './routes/auth';
import { uploadRoutes } from './routes/upload';
import { resolve } from 'path';

const app = fastify();

app.register(multipart);

app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
});

app.register(cors, {
  origin: true,
});

app.register(jwt, {
  secret: 'spacetime',
});

app.register(authRoutes);
app.register(memoriesRoutes);
app.register(uploadRoutes);

app
  .listen({
    port: 4444,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('🚀 HTTP server running on port http://localhost:4444');
  });
