



module.exports= (app) => {
    app.get("/pagamentos", (request, response) => {
        console.log('pagamentos');
        response.send('pagamentos');
        });

    app.post("/pagamentos", (request, response) => {
        let pagamento = request.body;
        pagamento.status = 'realizado';
        pagamento.data = new Date();
        console.log(pagamento);
        let pagamentoServico = app.services.PagamentoService(app);
        pagamentoServico.salvarPagamento(pagamento, (erro, resultado) => {
            if (!erro){
                response.json(pagamento);
            }
            else{
                response.send("Erro ao salvar:" + erro);
            }
        });
    });
}
