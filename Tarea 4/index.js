const express = require('express');
const path = require('path');
const rutas = require('./rutas');
const routes = require('./src/rutas');
const {engine} =require('express-handlebars');

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const port = 3000;

app.use('/assets',express.static(path.join(__dirname,'assets')));

app.use('', routes);

rutas(app);

app.listen(port,function(){
    console.log('app is running in port: ' + port);
});

