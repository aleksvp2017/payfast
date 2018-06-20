var express = require('express');
var app = express();
//var load = require('express-load');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function (){
    //tem que ser antes de carregar as rotas
     app.use(bodyParser.json());
     app.use(expressValidator());

    consign().include('routes').then('infra').then('services').into(app);
    //load('routes', {cwd: 'app'}).into(app);
    return app;
}   