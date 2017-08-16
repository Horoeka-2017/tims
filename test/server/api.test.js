var request = require('supertest')
var test = require('tape')

var app = require('../../server/server.js')

test('/messages returns status 200', function (t) {
  const expected = 200

  request(app)
    .get('/api/v1/messages')
    .end(function (err, res) {
      t.error(err)
      t.equal(res.status, expected)
      t.end()
    })
})

test('/messages returns an object', function (t) {
  const expected = 'object'

  request(app)
  .get('/api/v1/messages')
  .end(function (err, res) {
    t.error(err)
    t.equal(typeof (res.body), expected)
    t.end()
  })
})

test('/messages post returns status 200', function (t) {
  const expected = 201
  const message = {
    senderId: 10,
    recipientId: 10,
    imageUrl: 'string'
  }
  request(app)
    .post('/api/v1/messages')
    .send(message)
    .end(function (err, res) {
      t.error(err)
      t.equal(res.status, expected)
      t.end()
    })

  test('/people returns an object', function (t) {
    const expected = 'object'

    request(app)
        .get('/api/v1/people')
        .end(function (err, res) {
          t.error(err)
          t.equal(typeof (res.body), expected)
          t.end()
        })
  })
})

test('/messages/1 returns 200', function (t) {
  // Arrange
  const expected = 200

  // Act
  request(app)
    .delete('/api/v1/messages/1')
    .end(function (err, res) {
      // Assert
      t.error(err)
      t.equal(res.status, expected)
      t.end()
    })
})
