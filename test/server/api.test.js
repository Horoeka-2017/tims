var test = require('ava')
var request = require('supertest')

var app = require('../../server/server.js')

test('/messages returns status 200', function (t) {
  return request(app)
    .get('/api/v1/messages')
    .then(res => {
      t.is(res.status, 200)
    })
    .catch(err => {
      t.fail(err.message)
    })
})

test('GET /messages returns an array', function (t) {
  return request(app)
    .get('/api/v1/messages')
    .then(res => {
      t.true(res.body instanceof Array)
    })
    .catch(err => {
      t.fail(err.message)
    })
})

test('POST /messages returns status 201', function (t) {
  const message = {
    senderId: 10,
    recipientId: 10,
    imageUrl: 'string'
  }
  return request(app)
    .post('/api/v1/messages')
    .send(message)
    .then(res => {
      t.is(res.status, 201)
    })
    .catch(err => {
      t.fail(err.message)
    })
})

test('GET /people returns an array', function (t) {
  return request(app)
    .get('/api/v1/people')
    .then(res => {
      t.true(res.body instanceof Array)
    })
    .catch(err => {
      t.fail(err.message)
    })
})

test('DELETE /messages/1 returns 200', function (t) {
  return request(app)
    .delete('/api/v1/messages/1')
    .then(res => {
      t.is(res.status, 200)
    })
    .catch(err => {
      t.fail(err.message)
    })
})
