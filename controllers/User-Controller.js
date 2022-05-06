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
            errors.push({ msg: 'All fields are required' });
          }
        
          
        
          if (password.length < 6) {
            errors.push({ msg: 'Password must be atleast 6 characters' });
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
                    errors.push({ msg: 'Email already in use.' });
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
                                    'Congrats! Your account is created and you can now log in!'
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