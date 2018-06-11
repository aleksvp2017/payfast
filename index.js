
var express = require('express');
var app = express();

app.listen(3000, () => { console.log('payfast up and running');})


app.get("/", (request, response) => {
    console.log('home');
    response.send('home');
});