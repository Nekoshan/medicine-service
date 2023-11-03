export default function checkIsAdmin(req, res, next) {
  if (res.locals.user.isAdmin) {
    return next();
  }
  res.redirect('/');
}
