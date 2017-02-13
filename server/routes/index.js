var express = require('express');
var passport = require('passport');
var router = express.Router();

var User = require('../models/user');
var Purchase = require('../models/purchase');

router.get('/', function (req, res, next) {
    console.log('isAuthenticated', req.isAuthenticated());
    if (req.isAuthenticated()) {
        res.render('pages/app', {
            userId: req.user._id,
            userEmail: req.user.email
        });
    } else {
        res.render('pages/landing');
    }
});

router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/',
    failureFlash: true
}));

router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/',
    failureFlash: true
}));

router.post('/user/:userId/purchase', function (req, res, next) {
    var userId = req.param('userId');
    // uncomment to enable authentication
    // if (!req.isAuthenticated()) {
    //     return res.send(401);
    // }
    User.findById(userId, function (err, user) {
        var purchase;
        if (err) {
            return next(err);
        }
        if (user) {
            purchase = new Purchase();
            purchase.ownerId = userId;
            purchase.cost = req.body.cost;
            purchase.category = req.body.category;
            purchase.date = new Date();
            purchase.save(function (err) {
                if (err) throw err;
                res.send(200, purchase);
            });
        } else {
            res.send(400);
        }
    });
});

module.exports = router;
