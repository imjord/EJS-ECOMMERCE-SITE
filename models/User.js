const {Schema, model} = require('mongoose');


//  Our userschema having two fields email and password

const UserSchema = new Schema({
    email: {
        type: String, 
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// need to apply bcrypt methods here

// user model
const User = new model('User', UserSchema);

module.exports = User;