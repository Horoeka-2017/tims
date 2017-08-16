import request from 'superagent'

export const GET_MESSAGES = 'GET_MESSAGES'
export const RECEIVE_MESSAGES = 'RECEIVE_POSTS'
export const REQUEST_MESSAGES = 'REQUEST_MESSAGES'
export const ADD_MESSAGE = 'ADD_MESSAGE'
export const SHOW_ERROR = 'SHOW_ERROR'

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
  return {
    type: 'ERROR',
    message: error.message
  }
}

export function fetchMessages () {
  return (dispatch) => {
    dispatch(requestMessages())
    request
      .get('/api/v1/messages')
      .end((err, res) => {
        if (err) {
          dispatch(showError(err)) // TODO implement showError action
        } else {
          dispatch(receiveMessages(res.body))
        }
      })
  }
}

export function addMessage (message, cb) {
  return (dispatch) => {
    request
      .post('/api/v1/new')
      .send(message)
      .end((err, res) => {
        if (err) {
          cb(err)
          dispatch(showError(err.message))
        } else {
          cb(null)
          dispatch(fetchMessages())
        }
      })
  }
}
