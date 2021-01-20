const mongoose = require('mongoose');

const ProductScehma = new mongoose.Schema({
    img: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    by: {
        type: String
    },
    contents: {
        type: Array,
        required: true
    },
    calories: {
        type: String || Number
    },
    protein: {
        type: String
    },
    carbohydrates: {
        type: String
    },
    cholesterol: {
        type: String
    }
});

module.exports = Product = mongoose.model('product', ProductScehma);