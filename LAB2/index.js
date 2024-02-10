const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hello! Welcome to my application.');
});

app.use(function(req, res) {
    res.status(404);
    res.send('Oops! We didn\'t find what you are looking for.');
});

app.listen(3000, function() {
    console.log('Server started on port 3000. Ctrl^c to quit.');
});
