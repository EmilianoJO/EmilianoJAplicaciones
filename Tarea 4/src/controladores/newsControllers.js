const { response } = require('express');
const New = require('../modelos/news');

const Nwct ={
    listar: function(req, res){
        let news=[];
        let query = req.query.q;
        New.buscar(query)
        .then(response=>{
            res.render('results',{news:response});
        })
        .catch(error =>{
            res.status(404).send('Algo salió mal');
        });
    }
}

module.exports = Nwct;