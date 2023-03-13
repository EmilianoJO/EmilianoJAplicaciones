const router= require('express').Router();
const rutaResult = require('./news');

router.use('/results',rutaResult);

module.exports = router;