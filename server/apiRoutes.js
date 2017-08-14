const express = require('express')
const request = require('superagent')
const bodyParser = require('body-parser')

const router = express.Router()

router.use(bodyParser.json())

router.get('/messages', (req, res) => {
  // request
  //   .get(`http://www.reddit.com/r/${req.params.subreddit}.json`)
  //   .end((err, result) => {
  //     if (err) {
  //       res.status(500).send(err.message)
  //     } else {
  //       res.json(result.body.data.children)
  //     }
  //   })
})

router.post('/messages', (req, res) => {

})

router.get('/people', (req, res) => {
  
})

module.exports = router
