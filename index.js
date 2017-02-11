var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var mongodbURL = require('./cred.js').mongodb.url;

var db;
var app = express();

app.use('/', express.static('public'))

app.get('/api', function (req, res) {
    // register and login and other routes could be set up here
    res.send('Hello World!');
});

MongoClient.connect(mongodbURL, function (err, database) {
    if (err) return console.log(err);
    db = database;
    app.listen(3000, function () {
        console.log('Example app listening on port 3000!', db.s.databaseName);
    });
});
