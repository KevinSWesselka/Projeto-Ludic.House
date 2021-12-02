
var express = require("express");
var router = express.Router();

var curtidaController = require("../controllers/curtidaController");

router.post("/btn_like", function (req, res) {
    curtidaController.btn_like(req, res);
});

router.post("/btn_like1", function (req, res) {
    curtidaController.btn_like1(req, res);
});

router.post("/btn_like2", function (req, res) {
    curtidaController.btn_like2(req, res);
});


module.exports = router;