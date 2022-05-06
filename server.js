const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./db/connection');
const routes = require('./routes');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
const MongoStore = require('connect-mongo')(session);

app.set('view engine', 'ejs');
require('./config/passport')(passport);

// **Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'))

// express session 
app.use(
    session({
        secret: 'secret',
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({mongooseConnection: db}),
        cookie: { maxAge: 120 * 60 * 100}
    })
);

// passport middleware 
app.use(passport.initialize());
app.use(passport.session());



// connect flash
app.use(flash());

// Global flash variables
app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  });


app.use((req,res,next) => {
    res.locals.session = req.session;
    next();
})

//Routes
app.use(routes);

// wild
// app.use((req,res) => {
//     res.status(404).end();
// })



// ** Open DB and Server
db.once('open', () => {
    console.log(`mongodb db connected`)
    app.listen(PORT, () => {
        console.log(`Server connected to ${PORT} 🌐`);
    })
})