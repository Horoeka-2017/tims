import request from 'superagent'

export const GET_MESSAGES = 'GET_MESSAGES'
export const RECEIVE_MESSAGES = 'RECEIVE_POSTS'
export const REQUEST_MESSAGES = 'REQUEST_MESSAGES'
export const ADD_MESSAGE = 'ADD_MESSAGE'

export function requestMessages () {
  return {
    type: REQUEST_MESSAGES
  }
}

export function receiveMessages (messages) {
  return {
    type: RECEIVE_MESSAGES,
    messages: messages
  }
}

export function addNewMessage (message) {
  return {
    type: ADD_MESSAGE,
    message: message
  }
}

function showError (error) {
  // TODO implement this function in redux
  console.log(error)
}

export function fetchMessages () {
  return (dispatch) => {
    dispatch(requestMessages())
    request
      .get('/api/v1/messages')
      .end((err, res) => {
        if (err) {
          dispatch(showError(err.message)) // TODO implement showError action
        } else {
          dispatch(receiveMessages(res.body))
        }
      })
  }
}

export function addMessage () {
  return (dispatch) => {
    dispatch(addMessage())
    request
      .post('/api/v1/new')
      .end((err, res) => {
        if (err) {
          dispatch(showError(err.message))
        } else {
          dispatch(addNewMessage(res.body))
        }
      })
  }
}
