const Product = require('../models/Products');

const ProductController = {


    getProducts(req,res){
        Product.find().then(results => {res.render('products', {results})})
    }


}

module.exports = ProductController;