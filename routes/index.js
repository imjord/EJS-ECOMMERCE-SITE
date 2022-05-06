const { getProducts } = require('../controllers/Product-Controller');
const { getUser, createUser, loginUser } = require('../controllers/User-Controller');
const Cart = require('../models/Cart');
const Product = require('../models/Products');

const router = require('express').Router();

router.get('/add-to-cart/:id', (req,res) => {
    var id = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    Product.findById(id, (err, product) => {
        if(err){
            return res.redirect('/homepage')
        }
        cart.add(product, product.id);
        req.session.cart = cart;
        console.log(req.session.cart)
        res.redirect('/products')

    })
})

router.get('/products', getProducts);

router.get('/', (req,res) => {
    res.render('landingpage')
})

router.get('/users', getUser);
router.post('/create', createUser);

router.get('/register', (req,res) => {
    res.render('register')
})

router.get('/login', (req,res) => {
    res.render('login')
})

router.get('/homepage', (req,res) => {
    res.render('home')
})

router.post('/login', loginUser)

module.exports = router;