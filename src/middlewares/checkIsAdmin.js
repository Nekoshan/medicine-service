export default function checkIsAdmin(req, res, next) {
  console.log(res.locals.user.admin);
  if (res.locals.user.admin) {
    return next();
  }
  return res.redirect('/');
}
