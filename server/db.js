const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getMessages, createMessage, getPeople
}

function getMessages(connection) {
  const db = conn || connection
  return db('messages').select()
}

function createMessage(message, conn) {
  const db = conn || connection
  return db('messages').insert([{ sender_id: message.senderId, reciepient_id: message.recipientId, image_url: message.imageUrl, date_time: new Date() }])
}

function getPeople(connection) {
  const db = conn || connection
  return db('people').select()
}
