const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getMessages, createmessage, getPeople
}

function getMessages (connection) {
  return
}

function createmessage (message, conn) {
  const db = conn || connection
  return db('message').insert([{ sender_id: message.senderId, reciepient_id: message.recipientId, image_url: message.imageUrl, date_time: new Date() }])
}

function getPeople() { }
