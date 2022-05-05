const { getUser, createUser, loginUser } = require('../controllers/User-Controller');

const router = require('express').Router();



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