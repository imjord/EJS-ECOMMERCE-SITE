const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt')

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
UserSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });

  UserSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

// user model
const User = new model('User', UserSchema);

module.exports = User;