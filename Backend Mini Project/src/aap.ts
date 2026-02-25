import express, { type Application } from 'express';
import cors from 'cors';
import taskRoutes from './Routes/task.routes';

const app: Application = express();

app.use(cors());
app.use(express.json());

// Register routes
app.use('/api', taskRoutes);

export default app;
