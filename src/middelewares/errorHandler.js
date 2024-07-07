function logErrors(err, req, res, next){
    console.error(err);
    next(err);
}

function errorHandler(err, req, res, next){
  let status = err.status || 500;
    res.status(status).json({status: err.status, error: err.message, stack: err.stack});
}

export {logErrors, errorHandler};
