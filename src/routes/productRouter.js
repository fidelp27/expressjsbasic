import { Router } from 'express';
const router = Router();
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct, updateProductTotally } from '../controllers/productController.js';
import { validation, validationProduct } from '../middelewares/validationProduct.js';



// Ruta para obtener todos los productos
router.get('/', getProducts)
// Ruta para obtener un producto por su ID
router.get('/:id', getProductById);

//Ruta para agregar un nuevo producto
router.post('/', validationProduct(), validation,createProduct);

// eliminar un producto
router.delete('/:id', deleteProduct);

// actualizar parcialmente un producto
router.patch('/:id', updateProduct)

// actualizar un producto totalmente
router.put('/:id', validationProduct(), validation, updateProductTotally)

export default router;
