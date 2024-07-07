import express, { json } from 'express';
import routerApi from './routes/index.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import process from 'process';
import { errorHandler, logErrors } from './middelewares/errorHandler.js';
import { notFoundHandler } from './middelewares/notFound.js';
const app = express();

const port = process.env.PORT || 3000;

// cors

app.use(cors())
// Middleware para parsear JSON
app.use(bodyParser.json());

// Ruta principal de la aplicación
app.get('/api', (req, res) => {
  res.send('Hello World!');
});

// Configurar el router general de la app
routerApi(app);


app.use(notFoundHandler)

app.use(logErrors)
app.use(errorHandler)


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
