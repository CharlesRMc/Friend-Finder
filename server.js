const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));
app.use(express.static(__dirname + '/../public'));

//require the routes
require('./app/routing/html-routes.js')(app);
require('./app/routing/api-routes.js')(app);




app.listen(PORT, function() {
    console.log('Listening on port', PORT);
});