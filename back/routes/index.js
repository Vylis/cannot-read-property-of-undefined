const express = require("express");
const router = express.Router();
const monsters = require("./monsters");
const loots = require("./loots");

router.use("/monsters", monsters);
router.use("/loots", loots);

module.exports = router;
