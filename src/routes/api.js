import express from 'express';
import User from "../../db/models"
import Medicine from "../../db/models"

const  router = express.Router();


router.patch('/profile/:id', async (req, res) => {
  console.log(req.body, req.params.id);
  const {name,email,hashpass} = req.body;
  await User.update({name,email,hashpass}, { where: { id: req.params.id } });
  res.sendStatus(200);
})

router.delete('./shop/:id', async (req, res) => {
    await Medicine.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  });




export default router;
