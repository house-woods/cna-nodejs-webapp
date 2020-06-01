'use strict';

var express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.set('views', 'views');
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render('home', {
  });
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);