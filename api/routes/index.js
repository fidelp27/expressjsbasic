import { Router } from 'express';
import productRouter from './productRouter.js';

function routerApi(app) {
  const router = Router();
  app.use('/api/v1', router); // Prefijo general para la API
  router.use('/productos', productRouter); // Ruta específica para productos

   // Log para verificar que las rutas están siendo cargadas
   console.log('Rutas configuradas: /api/v1/productos');
}

export default routerApi;
