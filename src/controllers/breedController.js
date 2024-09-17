const router = require('express').Router();
const Breed = require('../model/breedModel');

router.get('/breed/add-breed', (req, res) => {
    res.render('addBreed');
})

router.post('/breed/add-breed', (req, res) => {
    Breed.create(req.body);
    res.redirect('/');
})

module.exports = router;