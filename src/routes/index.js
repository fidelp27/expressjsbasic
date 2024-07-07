import { Router } from 'express';
import productRouter from './productRouter.js';

function routerApi(app) {
  const router = Router();
  app.use('/api/v1', router); // Prefijo general para la API
  router.use('/productos', productRouter); // Ruta específica para productos
}

export default routerApi;
