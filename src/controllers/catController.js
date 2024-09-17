const router = require('express').Router();
const Cat = require('../model/catModel');

router.get('/', (req, res) => {
    res.render('home/index');
})

router.get('/cat/add-cat', (req, res) => {
    res.render('addCat');
})

module.exports = router;