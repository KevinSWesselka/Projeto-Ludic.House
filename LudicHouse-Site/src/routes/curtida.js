
var express = require("express");
var router = express.Router();

var curtidaController = require("../controllers/curtidaController");

router.post("/btn_like", function (req, res) {
    curtidaController.btn_like(req, res);
});


module.exports = router;