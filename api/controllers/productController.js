import ProductService from "../services/productServices.js";

const service = new ProductService();
console.log("new test")
export const getProducts = async (req, res, next) => {
  if(res.statusCode == 200){
  res.json(service)
  }else{
    const error = new Error('Error al obtener los productos');
    error.status = 500;
    next(error); // Pasa el error al middleware de error
  }
}

export const getProductById = async (req, res, next) => {
  try{
    const {id} = req.params;
    const producto = await service.find_item(id);
    if (producto) {
      res.json(producto);
    } else {
      const error = new Error('Producto no encontrado');
      error.status = 404;
      next(error); // Pasa el error al middleware de error
    }
  }catch(err){
    next(err)
  }
}

export const createProduct = async (req, res, next) => {
  try{
    const body = await req.body;
    const response = await service.create_item(body)
    res.json({message: 'Producto creado', data: response, products: service.products})
  }catch(err){
    next(err)
  }
}

export const deleteProduct = async (req, res) => {
  let response = await service.delete_item(req.params.id);
  res.json({message: `Producto ${req.params.id} eliminado`, products: response});
}

export const updateProduct = async (req, res) => {
  const {id} = req.params;
  const body = await req.body;
  await service.edit_item(id, body);
  res.json({message: `Producto ${id} actualizado`, data: body});
}

export const updateProductTotally = async (req, res) => {
  const {id} = req.params;
  const body = req.body;
  await service.edit_item(id, body);
  res.json({message: `Producto ${id} actualizado`, data: body});
}

