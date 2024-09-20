const Breed = require('../model/breedModel');

const findAll = () => Breed.find();

const create = (newBreed) => Breed.create(newBreed);

module.exports = {
    findAll,
    create,

}