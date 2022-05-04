// import user model
const User = require('../models/User');

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
    }




}



module.exports = UserController;