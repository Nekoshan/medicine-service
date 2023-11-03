import express from 'express';
import bcrypt from 'bcrypt';
import { Op } from 'sequelize';
import { Medicine, User, Shop } from '../../db/models';
import jwtConfig from '../config/jwtConfig';
import generateTokens from '../utils/generateTokens';

const router = express.Router();

router.get('/search', async (req, res) => {
  const { input } = req.query;
  const meds = await Medicine.findAll({
    model: Medicine,
    where: {
      name: {
        [Op.iLike]: `%${input}%`,
      },
    },
  });
  res.status(200).json(meds);
});

router.post('/search', async (req, res) => {
  // /search?amount=30&price=8&discount=true
  // req/...?discount=${true}&ammount=${false}&sort=desk
  // console.log('ДО ФИЛЬТРА ------', req.body);
  const filter = req.body;
  console.log(req.body);
  // dis === false an === false price
  // dis true {}
  if (filter?.discount === true) {
    const meds = await Medicine.findAll({
      where: { discount: true },
      order: [['price', 'DESC']],
    });
    return res.status(200).json(meds);
  }
  if (filter?.ammount === true) {
    const meds = await Medicine.findAll({
      order: [['amount', 'DESC']],
    });
    return res.status(200).json(meds);
  }
  if (filter?.price === true) {
    const meds = await Medicine.findAll({
      order: [['price', 'DESC']],
    });
    return res.status(200).json(meds);
  }
  if ((filter?.discount === false, filter?.ammount === false, filter?.price === false)) {
    const meds = await Medicine.findAll({
      order: [['price', 'ASC']],
    });
    return res.status(200).json(meds);
  }
});

router.patch('/profile/:id', async (req, res) => {
  // console.log(req.body, req.params.id);
  const { name, email, hashpass } = req.body;
  await User.update({ name, email, hashpass }, { where: { id: req.params.id } });
  res.sendStatus(200);
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

export default router;
