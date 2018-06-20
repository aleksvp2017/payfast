var mysql = require("mysql");

function createConnection(){
    console.log('criando conexao');    
    let conexao = 
     mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'payfast',
        port: '3306'
        });

    return conexao;
}


module.exports = () => {
    console.log('carregando dbConnectionFactory');
    return createConnection;
}