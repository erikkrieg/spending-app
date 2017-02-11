var express = require('express');
var passport = require('passport');  
var mongoose = require('mongoose'); 

var cred = require('./cred.js');

var app;
var port = 3000;

mongoose.connect(cred.mongodb.url);

app = express();
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('cookie-parser'));
app.use(require('express-session')({ 
    secret: 'shhsecret',
    resave: false,
    saveUninitialized: false
}));  // TODO: read about session and how secret is used
app.use('/', express.static('public'));
app.use(passport.initialize());  
app.use(passport.session()); 

app.post('/api/register', function (req, res) {
    res.send('register');
});

app.get('/api/login', function (req, res) {
    res.send('login');
});

app.listen(port);
