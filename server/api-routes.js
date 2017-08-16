const express = require('express')
const bodyParser = require('body-parser')

const db = require('./db')

const router = express.Router()

router.use(bodyParser.json())

router.get('/messages', (req, res) => {
  db.getMessages()
    .then(messages => {
      res.json(messages)
    })
})

router.post('/messages', (req, res) => {
  const message = {
    senderId: req.body.senderId,
    recipientId: req.body.recipientId,
    imageUrl: req.body.imageUrl
  }
  db.createMessage(message)
    .then(() => {
      res.status(201).send('Message Added')
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/people', (req, res) => {
  db.getPeople()
    .then(people => {
      res.json(people)
    })
})

router.delete('/messages/:id', (req, res) => {
  const messageId = req.params.id

  db.deleteMessage(messageId)
    .then(() => {
      res.status(200).send('Message Deleted')
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
