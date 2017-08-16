import request from 'superagent'

export const GET_MESSAGES = 'GET_MESSAGES'
export const RECEIVE_MESSAGES = 'RECEIVE_POSTS'
export const REQUEST_MESSAGES = 'REQUEST_MESSAGES'
export const RECEIVE_PEOPLE = 'RECEIVE_PEOPLE'
export const REQUEST_PEOPLE = 'REQUEST_PEOPLE'
export const SHOW_ERROR = 'SHOW_ERROR'

export function requestMessages() {
  return {
    type: REQUEST_MESSAGES
  }
}

export function receiveMessages(messages) {
  return {
    type: RECEIVE_MESSAGES,
    messages: messages
  }
}

export function showError(errorMessage) {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function requestPeople() {
  return {
    type: REQUEST_PEOPLE
  }
}
export function receivePeople(people) {
  return {
    type: RECEIVE_PEOPLE,
    people: people
  }
}

export function fetchMessages() {
  return (dispatch) => {
    dispatch(requestMessages())
    request
      .get('/api/v1/messages')
      .end((err, res) => {
        if (err) {
          dispatch(showError(err.message))
        } else {
          dispatch(receiveMessages(res.body))
        }
      })
  }
}

export function getPeople() {
  return (dispatch) => {
    dispatch(requestPeople())
    request.get('/api/v1/people')
      .end((err, res) => {
        if (err) {
          dispatch(showError(err.message))
        } else {
          dispatch(receivePeople(res.body))
        }
      })
  }
}
