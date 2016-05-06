var express = require('express');
var app = express();

var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");

var compiler = webpack(require('./webpack.config'));

app.use(webpackDevMiddleware(compiler, {} ));
app.use(express.static('assets'));

var proxy = require('express-http-proxy');


app.use('/web3', proxy('128.199.53.68:8545', {
    forwardPath: function(req, res) {
        return require('url').parse(req.url).path;
    }
}));

var port = process.env.PORT || 3000;
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
