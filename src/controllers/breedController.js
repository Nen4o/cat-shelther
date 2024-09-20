const router = require('express').Router();
const breedServices = require('../services/breedServices');

router.get('/breed/add-breed', (req, res) => {
    res.render('addBreed');
})

router.post('/breed/add-breed', (req, res) => {
    breedServices.create(req.body);
    res.redirect('/');
})

module.exports = router;