var express = require('express');  
var passport = require('passport');  
var router = express.Router();

router.get('/', function (req, res, next) { 
    if (req.isAuthenticated()) {
        res.send('logged in');
    } else {
        res.send('not logged in')
    }
    // res.render('index', { title: 'Express' });
});


router.get('/logout', function (req, res) {  
    req.logout();
    res.redirect('/');
});

router.post('/api/signup', passport.authenticate('local-signup', {  
  successRedirect: '/',
  failureRedirect: '/',
  failureFlash: true,
}));

router.post('/api/login', passport.authenticate('local-login', {  
  successRedirect: '/',
  failureRedirect: '/',
  failureFlash: true,
}));

module.exports = router;
