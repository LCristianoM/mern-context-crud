import express from 'express';
import postsRoutes from './routes/posts.routes.js';
import { connectDB } from './db'

const app = express();
connectDB();

app.use( postsRoutes );

app.listen(3000);
console.log('Server running OKAY on port --> --> ', 3000);