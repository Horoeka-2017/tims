import request from 'superagent'

export const GET_MESSAGES = 'GET_MESSAGES'
export const RECEIVE_MESSAGES = 'RECEIVE_POSTS'
export const REQUEST_MESSAGES = 'REQUEST_MESSAGES'

export function requestDeleteMessage (id) {
  return (dispatch) => {
    request
      .delete(`/api/v1/messages/${id}`)
      .end((err, res) => {
        if (err) {
          return (
          showError(err.message)
          )
        }
        dispatch(fetchMessages())
      })
  }
}

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
