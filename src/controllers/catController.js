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

router.get('/cat/edit/:catId', async (req, res) => {
    const catId = req.params.catId;
    try {
        const cat = await Cat.findById(catId).lean();
        res.render('editCat', { cat });
    } catch (err) {
        console.log(err);
        res.redirect('/');
    }
})

router.post('/cat/edit/:catId', async (req, res) => {
    const newCat = req.body;
    const catId = req.params.catId;

    await Cat.updateOne({ '_id': catId }, newCat);
    res.redirect('/');
})

router.route('/cat/shelter/:catId')
    .get(async (req, res) => {
        const catId = req.params.catId;
        const cat = await Cat.findById(catId).lean();

        res.render('catShelter', { cat });
    })
    .post(async (req, res) => {
        const catId = req.params.catId;

        await Cat.deleteOne({ '_id': catId });
        res.redirect('/');
    })

module.exports = router;