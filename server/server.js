var path = require('path')
var express = require('express')

var apiRoutes = require('./apiRoutes')
var server = express()

server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/', apiRoutes)

module.exports = server
