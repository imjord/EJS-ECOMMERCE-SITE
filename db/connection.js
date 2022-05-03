const mongoose = require('mongoose');


// mongoose connection to mongodb 
mongoose.connect('mongodb://localhost/ejsecom');


module.exports = mongoose.connection;