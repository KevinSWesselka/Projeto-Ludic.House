
var curtidaModel = require("../models/curtidaModel");
var sessoes = [];

function listar_curtida(req, res) {
    curtidaModel.listar_curtida()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function btn_like(req, res) {
    var curtiu = req.body.like_onServer;
    var fk_musica = req.body.music0Sever;
        
        curtidaModel.btn_like(curtiu,fk_musica)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

module.exports = {
    btn_like,
    listar_curtida
}