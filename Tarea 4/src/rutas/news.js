const express = require('express');
const router = express.Router();
const Nwct = require('./../controladores/newsControllers');

router.get('', Nwct.listar);

module.exports = router;