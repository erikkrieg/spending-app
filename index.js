var express = require('express');
var app = express();

app.use('/', express.static('public'))

app.get('/api', function (req, res) {
    // register and login and other routes could be set up here
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
