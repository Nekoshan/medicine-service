import express from 'express';
import { Medicine, Shop } from '../../db/models';
import verifyAccessToken from '../middlewares/verifyAccessToken';
import checkNotAuth from '../middlewares/checkNotAuth';

const router = express.Router();

router.get('/', async (req, res) => {
  const medicines = await Medicine.findAll({
    order: [['id', 'DESC']],
  });
  const initState = { medicines };
  res.render('Layout', initState);
});

router.get('/profile', verifyAccessToken, async (req, res) => res.render('Layout'));

router.get('/shop', async (req, res) => {
  const medicines = await Shop.findAll({
    where: { user_id: res.locals.user.id },
  });
  const initState = { medicines };
  res.render('Layout', initState);
});

router.get('/signin', checkNotAuth, (req, res) => res.render('Layout'));

router.get('/signup', checkNotAuth, (req, res) => res.render('Layout'));

router.get('/add',(req,res)=>{
  res.render('Layout')
})

export default router;
