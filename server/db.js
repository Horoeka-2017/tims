var environment = process.env.NODE_ENV || 'development'
var config = require('../../knexfile')[environment]
var connection = require('knex')(config)

module.exports = {
  getMessages, createmessage, getPeople
}

function getMessages (connection) {
  return 
}

function createmessage (message, conn) { 
const db = conn || connection
db('message')
}

function getPeople () { }
