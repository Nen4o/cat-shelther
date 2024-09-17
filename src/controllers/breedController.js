const router = require('express').Router();

router.get('/breed/add-breed', (req, res) => {
    res.render('addBreed');
})

module.exports = router;