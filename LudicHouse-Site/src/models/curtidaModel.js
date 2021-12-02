
var database = require("../database/config")

var musica_pg1 = sessionStorage.getItem('musica1')
var email_usuario = sessionStorage.getItem('email_user')

function btn_like(musica_pg1, email_usuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    var instrucao = `
        INSERT INTO curtida (fk_musica, fk_usuario) VALUES 
        ('SELECT id FROM musica WHERE nome = "${musica_pg1}"',
         'SELECT id FROM usuario WHERE nome = "${email_usuario}"');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    btn_like
};