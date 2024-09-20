const Breed = require('../model/breedModel');

const findAll = () => Breed.find();

module.exports = {
    findAll,

}