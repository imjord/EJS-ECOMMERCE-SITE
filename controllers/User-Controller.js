// import user model
const User = require('../models/User');
const passport = require('passport');

const UserController = {


    getUser(req,res){
        User.find().then(results => {res.json({'Users': results})})

    },

    createUser(req,res){
        const { email, password} = req.body;
        let errors = [];

        if ( !email || !password) {
            errors.push({ msg: 'Please enter all fields' });
          }
        
          
        
          if (password.length < 6) {
            errors.push({ msg: 'Password must be at least 6 characters' });
          }
        
          if (errors.length > 0) {
            res.render('register', {
              errors,
             
              email,
              password,
            });

            } else {
                    User.findOne({email: req.body.email}).then(user => {
                if(user){
                    errors.push({ msg: 'Email already exists' });
                    res.render('register', {
                        errors,
                       
                        email,
                        password,
                      });
                    
                } else {
                    const newUser = new User({
                        
                        email: req.body.email,
                        password: req.body.password
                    })
                  
                
                            newUser.save().then(results => {
                                req.flash(
                                    'success_msg',
                                    'You are now registered and can log in'
                                  );
                                res.redirect('/login')
                             })
         
                }
            })
                }

                

        
    },

    //login 
    loginUser(req,res, next){
        passport.authenticate('local', {
            successRedirect: '/homepage',
            failureRedirect: '/login',
            failureFlash: true
          })(req, res, next);
        
    }




}



module.exports = UserController;