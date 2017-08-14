const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

const db = require('./db')

const mockMessageData = [{
  sender: { id: 1, name: 'some', photo: 'stuff' },
  recipient: { id: 2, name: 'in', photo: 'here' },
  imageUrl: 'http://via.placeholder.com/300x300',
  dateTime: Date.now()
  }]

const mockPeopleData = [{ id: 1, name: 'Seth', photo: 'NitinAndNathan.jpg' }, { id: 3, name: 'Paul', photo: 'BrabetBeard.jpg' }]

router.use(bodyParser.json())

router.get('/messages', (req, res) => {
  res.json(mockMessageData)
})

router.post('/messages', (req, res) => {
  const message = {
    senderId: req.body.senderId,
    recipientId: req.body.recipientId,
    imageUrl: req.body.imageUrl
  }
  db.createMessage(message)
    .end((err, res) => {
      if (err) {
        res.status(500).send(err.message)
      } else {
        res.status(201).send('Message Added')
      }
    })
})

router.get('/people', (req, res) => {
  res.json(mockPeopleData)
})

module.exports = router
