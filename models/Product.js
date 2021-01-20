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
    nutrition: {
        type: Object
    },
    price: {
        type: Number || String
    }
});

module.exports = Product = mongoose.model('product', ProductScehma);