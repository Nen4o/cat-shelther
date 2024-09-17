const router = require('express').Router();
const Cat = require('../model/catModel');
const Breed = require('../model/breedModel');

router.get('/', async (req, res) => {
    const cats = await Cat.find().lean();

    res.render('home/index', { cats });
})

router.route('/cat/add-cat')
    .get(async (req, res) => {
        const breeds = await Breed.find().lean();

        res.render('addCat', { breeds });
    })
    .post(async (req, res) => {
        try {
            await Cat.create(req.body);
            res.redirect('/');
        } catch (err) {
            console.log(err);
            res.redirect('/cat/add-cat');
        }
    })
module.exports = router;