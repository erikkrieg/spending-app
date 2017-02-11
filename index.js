var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var mongodbURL = require('./cred.js').mongodb.url;

var db;
var app = express();

app.use(require('body-parser').urlencoded({ extended: true }));
app.use('/', express.static('public'))

app.post('/api/register', function (req, res) {
    res.send('register');
});

app.get('/api/login', function (req, res) {
    res.send('login');
});

MongoClient.connect(mongodbURL, function (err, database) {
    if (err) return console.log(err);
    db = database;
    app.listen(3000, function () {
        console.log('Example app listening on port 3000!', db.s.databaseName);
    });
});
