const Cat = require('../model/catModel');

const getAll = () => Cat.find();

const create = (catData) => Cat.create(catData);

const findById = (catId) => Cat.findById(catId);

const updateCat = (newCatData, catId) => Cat.updateOne({ '_id': catId }, newCatData);

const deleteCat = (catId) => Cat.deleteOne({ '_id': catId });

module.exports = {
    getAll,
    create,
    findById,
    updateCat,
    deleteCat,
}