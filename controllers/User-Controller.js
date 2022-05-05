// import user model
const User = require('../models/User');
const passport = require('passport');

const UserController = {


    getUser(req,res){
        User.find().then(results => {res.json({'Users': results})})

    },

    createUser(req,res){
        try{
            const newUser = new User({
                email: req.body.email,
                password: req.body.password
            })


            newUser.save().then(results => {
                // flash u are creted go to login 
                res.redirect('/login');
            })

        } catch (error) {
            console.log(error);
        }
    },

    //login 
    loginUser(req,res, next){
        passport.authenticate('local', {
            successRedirect: '/homepage',
            failureRedirect: '/login',
            // failureFlash: true
          })(req, res, next);
        
    }




}



module.exports = UserController;