import express from 'express';

const router = express.Router();

router.get('/search', async (req, res) => { // /search?amount=30&price=8&discount=true
const query = req.query;
});

export default router;
