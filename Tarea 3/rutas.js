const path = require('path');
const express = require('express');


function cargarHome(req, res) { 
    res.sendFile(path.join(__dirname , './views/Presentación.html'));
}

module.exports = function (app) {

    app.use('/dist',express.static(path.join(__dirname,'dist')));

    app.get('/',cargarHome);

    app.get('*', function (req, res) { //COMODIN siempre va al FINAL
        res.status(404).send('Not Found! (404)');
    });
}