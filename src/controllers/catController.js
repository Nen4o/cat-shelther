const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home/index');
})

router.get('/cat/add-cat', (req, res) => {
    res.render('addCat');
})

module.exports = router;