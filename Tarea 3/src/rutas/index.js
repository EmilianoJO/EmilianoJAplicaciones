const router= require('express').Router();
const rutasInfoP = require('./infoP');
const rutasCarrera = require('./carrera');
const rutasHobbies = require('./hobbies');

router.use('/infoP',rutasInfoP);
router.use('/hobbies',rutasHobbies);
router.use('/carrera',rutasCarrera);

module.exports = router;