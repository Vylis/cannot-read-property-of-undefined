const express = require('express');
const router = express.Router();
const monsters = require('./monsters');

router.use('/monsters', monsters);

router.get("/", (request, response) => {
  response.send("WELCOME");
});

module.exports = router;
