
class PagamentoService {


    constructor(app){
        this._conexao = app.infra.dbConnectionFactory();
    }

    salvarPagamento(pagamento, callback){
        console.log('gravando pagamento...');
        pagamento.status = 'realizado';
        pagamento.data = new Date();        
        this._conexao.query('insert into pagamentos set ?', pagamento, callback);
        this._conexao.end();
    }

    alterarStatusPagamento(pagamento,callback){
        console.log('alterando status do pagamento para ' + pagamento.status);
        this._conexao.query('update pagamentos set status = ? where id = ?', [pagamento.status, pagamento.id], callback);
        this._conexao.end();
    }

    listarTodosPagamentos(callback){
        console.log('listando pagamentos...');
        this._conexao.query('select * from pagamentos', callback);
        this._conexao.end();
    }


}

module.exports = () => {
    return function(app){
        return new PagamentoService(app);
    }
}


