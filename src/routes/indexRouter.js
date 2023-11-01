import express from 'express';
import { Medicine } from '../../db/models'

const router = express.Router();

router.get('/', async (req, res) => {
  const medicines = await Medicine.findAll({
    order: [['id', 'DESC']],
  });
  const initState = { medicines };
  res.render('Layout', initState);
});

router.get('/profile', (req, res) => {

})

router

export default router;

