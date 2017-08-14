const express = require('express')
const request = require('superagent')
const bodyParser = require('body-parser')

const router = express.Router()

const mockMessageData = [{
  sender: {id: 1, name: 'some', photo: 'stuff'},
  recipient: {id: 2, name: 'in', photo: 'here'},
  imageUrl: 'http://via.placeholder.com/300x300',
  dateTime: Date.now()
}]

router.use(bodyParser.json())

router.get('/messages', (req, res) => {
  res.json(mockMessageData)
})

router.post('/messages', (req, res) => {

})

router.get('/people', (req, res) => {

})

module.exports = router
