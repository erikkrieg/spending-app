var express = require('express');
var passport = require('passport');  
var mongoose = require('mongoose'); 

var cred = require('./cred.js');
var routes = require('./routes/index'); 
var configPassport = require('./config/passport');

var app;
var port = 3000;

mongoose.connect(cred.mongodb.url);

app = express();
app.set('view engine', 'ejs');
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('cookie-parser')());
app.use(require('express-session')({ secret: cred.session.secret, resave: true, saveUninitialized: true }));
app.use(express.static('public'))
app.use('/', routes); 
app.use(passport.initialize());  
app.use(passport.session()); 
app.use(require('connect-flash'));

configPassport(passport);

app.listen(port);
