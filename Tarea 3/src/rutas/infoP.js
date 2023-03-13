const express = require('express');
const router = express.Router();
const path = require('path');

//router.use(infoPHTML)

// router.post('', function(req, res){
//     res.send('lista de tareas');
// });

// router.put('/:id', function(req, res){
//     res.send('tarea actualizada correctamente');
// });

router.get('', function(req, res){
    //res.send('lista de tareas');
    res.sendFile(path.join(__dirname , './../../views/infoP.html'));
});

router.get('/:id', function(req, res){
    const id=req.params.id;
    res.send('detalles de tareas' + id);
});

module.exports = router;
