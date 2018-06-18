



module.exports= (app) => {
    app.get("/pagamentos", (request, response) => {
        console.log('pagamentos');
        response.send('pagamentos');
        });

    app.post("/pagamentos", (request, response) => {
        let pagamento = request.body;
        let pagamentoServico = app.services.PagamentoService(app);
        pagamentoServico.salvarPagamento(pagamento, (erro, resultado) => {
            if (!erro){
                response.json(pagamento);
            }
            else{
                console.log(`Erro ao salvar pagamento ${erro}`);
                response.status(400).send(erro);
            }
        });
    });
}
