export default function resLocals(req, res, next) {
  res.locals.path = req.originalUrl;
 






  
  next();
}
