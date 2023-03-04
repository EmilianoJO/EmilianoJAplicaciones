const path = require('path');
const express = require('express');


function cargarHome(req, res) {
    res.render('home');
}


module.exports = function (app) {

    //app.use('/assets',express.static(path.join(__dirname,'assets')));
    
    app.get('/',cargarHome);


    app.get('*', function (req, res) { //COMODIN siempre va al FINAL
        res.send('Pagina no Encontrada!');
    });
}