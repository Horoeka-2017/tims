var path = require('path')
var express = require('express')

var apiRoutes = require('./api-routes')
var server = express()

server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/', apiRoutes)
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = server
