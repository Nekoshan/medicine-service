import express from 'express';
import { Medicine } from '../../db/models'

const router = express.Router();

router.get('/search', async (req, res) => {
  // /search?amount=30&price=8&discount=true
  const { discount } = req.query;
  if(discount) {
    await Medicine.findAll({
      where: {discount: true}
    })
  }
});

router.get('/sort/price', async (req, res) => {

})

router.get('/sort/amount', async (req, res) => {
  
})

export default router;
