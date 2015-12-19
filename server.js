var express = require('express')
var Handlebars = require('handlebars')
var fs = require('fs')

var app = express()
app.use(express.static('public'))

var productListTemplate = 'productListTemplate.handlebars'
var productDataFile = 'productData.json'

var catalog = JSON.parse(fs.readFileSync(productDataFile))

var template = Handlebars.compile(fs.readFileSync(productListTemplate).toString());

app.get('/', function (req, res) {
    res.send(template(catalog))
});

var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
    console.log('Shop listening at http://%s:%s', host, port)
});
