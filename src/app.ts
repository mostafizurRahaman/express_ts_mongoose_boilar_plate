import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/students/student.routes';

const app: Application = express();

// parsers:
app.use(cors());
app.use(express.json());

// application routes:
app.use('/api/v1/students', StudentRoutes);

// main route:

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Yah!!! Our server is running now 🤷‍♂️');
});

// export app:

export default app;
