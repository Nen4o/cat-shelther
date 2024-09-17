const router = require('express').Router();

const catController = require('./controllers/catController');

router.use(catController);

module.exports = router;