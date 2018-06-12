module.exports= (app) => {
    app.get("/pagamentos", (request, response) => {
        console.log('pagamentos');
        response.send('pagamentos');
        });
}