const {Schema, model} = require('mongoose');


const ProductSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String, 
        required: true
    },
    price: {
        type: Number, 
        required: true,
        min: 0
    },
    category: {
        type: String, 
        lowercase: true
    }
});


const Product = new model('Product', ProductSchema);

module.exports = Product;