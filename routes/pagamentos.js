function prepararValidacoes(request){
    request.assert("valor", "Valor deve ser preenchido").notEmpty();
}


module.exports= (app) => {
    app.get("/pagamentos", (request, response) => {
        let pagamentoServico = app.services.PagamentoService(app);
        pagamentoServico.listarTodosPagamentos((erro, resultado) => {
            if (erro){
                response.status(400).send("Não foi possível listar os pagamentos");
                return;
            }

            response.send(resultado);
        })    
    });


    app.post("/pagamentos", (request, response) => {
        let pagamento = request.body;
        
        prepararValidacoes(request);
        let erros = request.validationErrors();
        if (erros){
            response.status(400).json(erros);
            return;
        }

        let pagamentoServico = app.services.PagamentoService(app);
        pagamentoServico.salvarPagamento(pagamento, (erro, resultado) => {
            if (!erro){
                response.location("/pagamentos/" + resultado.insertId).status(201).json(pagamento);
            }
            else{
                console.log(`Erro ao salvar pagamento ${erro}`);
                response.status(500).send(erro);
            }
        });
    });

    app.put("/pagamentos/:id", (request, response) => {
        let pagamento = {};
        pagamento.id = request.params.id;
        pagamento.status = 'confirmado';
        let pagamentoServico = app.services.PagamentoService(app);
        pagamentoServico.alterarStatusPagamento(pagamento, (erro, resultado) => {
            if (!erro){
                response.status(200).json(pagamento);
            }
            else{
                console.log(`Erro ao confirmar pagamento ${erro}`);
                response.status(500).send(erro);
            }
        });
    });

    app.delete("/pagamentos/:id", (request, response) => {
        let pagamento = {};
        pagamento.id = request.params.id;
        pagamento.status = 'cancelado';
        let pagamentoServico = app.services.PagamentoService(app);
        pagamentoServico.alterarStatusPagamento(pagamento, (erro, resultado) => {
            if (!erro){
                response.json(pagamento);
            }
            else{
                console.log(`Erro ao cancelar pagamento ${erro}`);
                response.status(500).send(erro);
            }
        });
    });



}
