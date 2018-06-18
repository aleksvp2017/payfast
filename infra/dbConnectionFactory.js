var mysql = require("mysql");

function createConnection(){
    let conexao = 
     mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'casadocodigo_nodejs'
        });

    return conexao;
}



module.exports = () => {
    console.log('carregando dbConnectionFactory');
    return createConnection;
}