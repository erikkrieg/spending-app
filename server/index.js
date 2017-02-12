var path = require('path');
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
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: cred.session.secret, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(require('connect-flash')());
app.use('/', routes);

configPassport(passport);

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
});

app.listen(port);
