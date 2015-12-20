var express = require('express')
var Handlebars = require('handlebars')
var fs = require('fs')

var app = express()
app.use(express.static('public'))

var productListTemplate = 'productListTemplate.handlebars'
var productDataFile = 'productData.json'

app.get('/', function (req, res) {
    res.send(catalogPage())
})

var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
    console.log('Shop listening at http://%s:%s', host, port)
})

function catalogPage() {
    var plainCatalog = JSON.parse(fs.readFileSync(productDataFile))
    var catalogWithSearchData = {products: plainCatalog.products.map(addSearchData)}
    var template = Handlebars.compile(fs.readFileSync(productListTemplate).toString())
    return template(catalogWithSearchData)
}

function addSearchData(product) {
    product.searchData = product.name.toLowerCase() // we could add other stuff like tags here as well
    return product
}