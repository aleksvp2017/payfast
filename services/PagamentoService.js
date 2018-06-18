
class PagamentoService {


    constructor(app){
        this._conexao = app.infra.dbConnectionFactory();
    }

    salvarPagamento(pagamento, callback){
        console.log('gravando pagamento...');
        this._conexao.query('insert into pagamentos set ?', pagamento, callback);
    }

}

module.exports = () => {
    return function(app){
        return new PagamentoService(app);
    }
}


