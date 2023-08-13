// Create web server
// Import modules
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Create app
var app = express();

// Set port
var port = 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set static path
app.use(express.static(path.join(__dirname, 'bower_components')));

// Set body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set routes
app.use(require('./routes'));

// Start server
app.listen(port, function(){
    console.log('Server started on port ' + port);
});