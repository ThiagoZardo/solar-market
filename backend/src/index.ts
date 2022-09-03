import 'dotenv/config';
import express from 'express';
import errorMiddleware from './middlewareErrors';
import routerProducts from './routes/routerProducts';

const app = express();

app.use(express.json());

const PORT = process.env.API_PORT || 8000;

app.use('/category', routerProducts);
app.use('/', routerProducts);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
