const router = require('express').Router();

const catController = require('./controllers/catController');
const breedController = require('./controllers/breedController');

router.use(breedController);
router.use(catController);

module.exports = router;