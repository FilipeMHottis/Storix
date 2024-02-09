import express, { Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './docs/swagger.config';
import routers from './router/index';

const app = express();

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/users', routers.usersRouter);
app.use('/products', routers.productsRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Server opened!');
});

export default app;
