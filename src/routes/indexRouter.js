import express from 'express';
import { Medicine, Shop } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const medicines = await Medicine.findAll({
    order: [['id', 'DESC']],
  });
  const initState = { medicines };
  res.render('Layout', initState);
});

router.get('/profile', async (req, res) => {
  res.render('Layout');
});

router.get('/shop', async (req, res) => {
  const medicines = await Shop.findAll({
    where: { user_id: res.locals.user.id },
  });
  const initState = { medicines };
  res.render('Layout', initState);
});

router.get('/signin', checkNotAuth, (req, res) => res.render('Layout'));

router.get('/signup', checkNotAuth, (req, res) => res.render('Layout'));

router.get('/account', verifyAccessToken, (req, res) => res.render('Layout'));

export default router;
