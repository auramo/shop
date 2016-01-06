var express = require('express')
var fs = require('fs')

var app = express()
app.use(express.static('public'))

app.get('/', function (req, res) {
    res.send(catalogPage())
})

var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
    console.log('Shop listening at http://%s:%s', host, port)
})
