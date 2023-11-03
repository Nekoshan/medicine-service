import express from 'express';
import bcrypt from 'bcrypt';
import { Medicine, User, Shop } from '../../db/models';
import jwtConfig from '../config/jwtConfig';
import generateTokens from '../utils/generateTokens';

const router = express.Router();

router.delete('/med/:id', async (req,res)=>{
  // await Medicine.destroy({where: {
  //   id: req.params.id
  // }})
  res.sendStatus(200)
})

router.get('/search', async (req, res) => {
  // /search?amount=30&price=8&discount=true
  // req/...?discount=${true}&ammount=${false}&sort=desk
  const { amount, discount } = req.query;
  if (discount) {
    await Medicine.findAll({
      where: { discount: true },
    });
    // if (amount) {
    // }
  }
});

router.get('/sort/:typeSort', async (req, res) => {});

router.get('/sort/amount', async (req, res) => {});

router.put('/profile/:id', async (req, res) => {
  // console.log(req.body, req.params.id);
  const { name, email } = req.body;
  await User.update({ name, email }, { where: { id: req.params.id } });
  const user = await User.findOne({ where: { id: req.params.id } });
  console.log(user);
  res.status(200).send(user);
});

router.delete('/shop/:id', async (req, res) => {
  await Shop.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
});

router.post('/auth/signup', async (req, res) => {
  const { email, name, password } = req.body;
  if (!email || !name || !password) {
    return res.status(400).send('All field should be non empty');
  }

  const hash = await bcrypt.hash(password, 13);

  const [user, created] = await User.findOrCreate({
    where: { email },
    defaults: { name, hashpass: hash },
  });

  if (!created) {
    return res.status(400).send('Email already in use');
  }

  const plainUser = user.get();
  delete plainUser.hashpass;

  const { accessToken, refreshToken } = generateTokens(plainUser);

  return res
    .cookie(jwtConfig.access.name, accessToken, {
      maxAge: jwtConfig.access.expiresIn,
      httpOnly: true,
    })
    .cookie(jwtConfig.refresh.name, refreshToken, {
      maxAge: jwtConfig.refresh.expiresIn,
      httpOnly: true,
    })
    .sendStatus(200);
});

router.post('/auth/signin', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send('All field should be non empty');
  }

  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.status(400).send('Invalid email');
  }

  const isValid = await bcrypt.compare(password, user?.hashpass);

  if (!isValid) {
    return res.status(400).send('Invalid  password');
  }

  const plainUser = user.get();
  delete plainUser.hashpass;

  const { accessToken, refreshToken } = generateTokens(plainUser);

  return res
    .cookie(jwtConfig.access.name, accessToken, {
      maxAge: jwtConfig.access.expiresIn,
      httpOnly: true,
    })
    .cookie(jwtConfig.refresh.name, refreshToken, {
      maxAge: jwtConfig.refresh.expiresIn,
      httpOnly: true,
    })
    .sendStatus(200);
});

router.get('/auth/logout', (req, res) => {
  res.clearCookie(jwtConfig.access.name).clearCookie(jwtConfig.refresh.name).redirect('/');
});

router.post('/add', async (req,res)=>{
  const data = req.body;
  await Medicine.create(data);
  res.redirect('/')
})
// router.get('/lol/:id',(req,res)=>{
//   const {id}=req.params
//   const pupa = {message:'pupalupa',id}
//   res.json(pupa)
// })

export default router;
