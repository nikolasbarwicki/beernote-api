const express = require('express');
const {
  getBeers,
  getBeer,
  createBeer,
  updateBeer,
  deleteBeer,
} = require('../controllers/beers');

const router = express.Router();

router.route('/').get(getBeers).post(createBeer);
router.route('/:id').get(getBeer).put(updateBeer).delete(deleteBeer);

module.exports = router;
