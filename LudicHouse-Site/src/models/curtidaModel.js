
var database = require("../database/config")

function btn_like() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    var instrucao = `
        INSERT INTO curtida (fk_musica, fk_usuario) VALUES 
        ('SELECT id FROM usuario WHERE nome = "${NOME_USUARIO}"', 
        'SELECT id FROM musica WHERE nome = "${nome_music}"');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    btn_like
};