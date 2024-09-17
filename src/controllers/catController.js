const router = require('express').Router();
const Cat = require('../model/catModel');

router.get('/', (req, res) => {
    res.render('home/index');
})

router.route('/cat/add-cat')
    .get((req, res) => {
        res.render('addCat');
    })
    .post(async (req, res) => {
        try {
            await Cat.create(req.body);
            res.redirect('/');
        } catch (err) {
            console.log(err);
            res.redirect('cat/add-cat');
        }
    })
module.exports = router;