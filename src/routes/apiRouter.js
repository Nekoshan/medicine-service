import express from 'express';
import { Medicine, User } from '../../db/models';

const router = express.Router();

router.get('/search', async (req, res) => {
  // /search?amount=30&price=8&discount=true
  // req/...?discount=${true}&ammount=${false}&sort=desk 
  const { amount, discount } = req.query;
  if (discount) {
    await Medicine.findAll({
      where: { discount: true },
    });
    if(amount){
      
    }
  }
});

router.get('/sort/:typeSort', async (req, res) => {});

router.get('/sort/amount', async (req, res) => {});

router.patch('/profile/:id', async (req, res) => {
  // console.log(req.body, req.params.id);
  const {name,email,hashpass} = req.body;
  await User.update({name,email,hashpass}, { where: { id: req.params.id } });
  res.sendStatus(200);
})

router.delete('./shop/:id', async (req, res) => {
    await Medicine.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  });



export default router;
