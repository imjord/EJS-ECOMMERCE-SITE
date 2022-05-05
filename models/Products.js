const {Schema, model} = require('mongoose');


const ProductSchema = new Schema({
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