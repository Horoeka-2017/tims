const express = require('express')
const request = require('superagent')
const bodyParser = require('body-parser')

const router = express.Router()

router.use(bodyParser.json())

router.get('/messages', (req, res) => {
  res.json(mockData)
})

router.post('/messages', (req, res) => {

})

router.get('/people', (req, res) => {

})

module.exports = router
