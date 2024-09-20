const Cat = require('../model/catModel');

const getAll = () => {
    return Cat.find();
}

module.exports = {
    getAll,
}