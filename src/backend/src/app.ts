import express, { Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './docs/swaggerConfig';
import usersRouter from './router/users.router';

const app = express();

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/users', usersRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Server opened!');
});

export default app;
