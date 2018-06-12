var express = require('express');
var app = express();
var load = require('express-load');

module.exports = function (){
    load('routes', {cwd: 'app'}).into(app);
    return app;
}