var request = require('supertest')
var test = require('tape')

var app = require('../../server/server.js')

test('/messages/1 returns 200', function (t) {
  // Arrange
  var expected = 200

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
