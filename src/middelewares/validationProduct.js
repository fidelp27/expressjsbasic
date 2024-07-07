import { body, validationResult } from 'express-validator';

const validationProduct =()=>{
  return [
    body('nombre').isLength({ min: 3 }).withMessage('El campo nombre es obligatorio y debe tener al menos 3 caracteres'),
    body('id').isNumeric().withMessage('El campo id es obligatorio y debe ser un número'),
    body('precio').notEmpty().isNumeric().isLength({max:2}).withMessage('El campo price es obligatorio y debe ser un número de dos cifras')
  ];
}
const validation= (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ errors: errors.array() });
}

export {validationProduct, validation}
