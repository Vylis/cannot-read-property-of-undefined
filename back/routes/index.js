const express = require('express');
const router = express.Router();

const monsters = require('./monsters');

router.use('/monsters', monsters);

module.exports = router;
