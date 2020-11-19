var express = require('express');
var app = express();
const PORT =  process.env.PORT || 5000;
const path = require('path');
var exphbs  = require('express-handlebars');


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const otherstuff = "hello there, this is other stuff";

// Send handlebar routes
app.get('/', function (req, res) {
    res.render('home',{
    	stuff: otherstuff
    });
});

// Definir path estatico desde donde express va a servir
app.use(express.static(path.join(__dirname,'public')))

app.listen(PORT, () => console.log('Server Listening on Port ' + PORT));
