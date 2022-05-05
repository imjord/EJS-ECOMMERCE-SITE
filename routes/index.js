const { getUser, createUser, loginUser } = require('../controllers/User-Controller');

const router = require('express').Router();



router.get('/', (req,res) => {
    res.render('landingpage', {title: 'Ecom'})
})

router.get('/users', getUser);
router.post('/create', createUser);

router.get('/register', (req,res) => {
    res.render('register', {title: 'sign up'})
})

router.get('/login', (req,res) => {
    res.render('login', {title: 'login'})
})


router.post('/login', loginUser)

module.exports = router;