const test = require('./server/db')
test.getMessages()
  .then(messages => {
    console.log(messages)
  })
