import express from 'express';
import { Medicine, Shop } from '../../db/models';
import verifyAccessToken from '../middlewares/verifyAccessToken';
import checkNotAuth from '../middlewares/checkNotAuth';
import checkIsAdmin from '../middlewares/checkIsAdmin';

const router = express.Router();

router.get('/', async (req, res) => {
  const medicines = await Medicine.findAll({
    order: [['id', 'DESC']],
  });
  const initState = { medicines };
  res.render('Layout', initState);
});

router.get('/profile', verifyAccessToken, async (req, res) => res.render('Layout'));

router.get('/signin', checkNotAuth, (req, res) => res.render('Layout'));

router.get('/signup', checkNotAuth, (req, res) => res.render('Layout'));

router.get('/shop', verifyAccessToken, (req, res) => res.render('Layout'));
router.get('/addCard', checkIsAdmin, (req, res) => res.render('Layout'));

export default router;
