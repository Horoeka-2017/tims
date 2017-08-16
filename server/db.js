const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getMessages,
  createMessage,
  getPeople
}

function getMessages (conn) {
  const db = conn || connection
  return db('messages')
    .join('people as sender',
          'sender.id',
          'messages.sender_id')
    .join('people as recipient',
          'recipient.id',
          'messages.recipient_id')
    .select('messages.id',
            'messages.image_url as imageUrl',
            'messages.date_time as dateTime',
            'sender.id as senderId',
            'sender.name as senderName',
            'sender.photo as senderPhoto',
            'recipient.id as recipientId',
            'recipient.name as recipientName',
            'recipient.photo as recipientPhoto')
    .then(messages => {
      return formattedMessages(messages)
    })
}

function formattedMessages (messages) {
  const formattedMsg = messages.map((message) => {
    return {
      sender: {
        id: message.senderId,
        name: message.senderName,
        photo: message.senderPhoto
      },
      recipient: {
        id: message.recipientId,
        name: message.recipientName,
        photo: message.recipientPhoto
      },
      imageUrl: message.imageUrl,
      dateTime: message.dateTime
    }
  })
  return formattedMsg
}

function createMessage (message, conn) {
  const db = conn || connection
  return db('messages').insert([{
    sender_id: message.senderId,
    recipient_id: message.recipientId,
    image_url: message.imageUrl,
    date_time: new Date()
  }])
}

function getPeople (conn) {
  const db = conn || connection
  return db('people').select()
}
