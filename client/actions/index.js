import request from 'superagent'

export const GET_MESSAGES = 'GET_MESSAGES'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'


export function requestMessages() {
  return {
    type: REQUEST_MESSAGES
  }
}

export function receiveMessages (messages) {
  return {
    type: RECEIVE_POSTS,
    posts: posts.map(post => post.data)
  }
}

export function fetchMessages() {
  return (dispatch) => {
    dispach(requestMessages())
    request
      .get('/api/v1/messages')
      .end((err, res) => {
        if (err) {
          dispatch(showError(err.message)) // TODO implement showError action
          return
        } else {
          dispatch(receiveMessages(res.body))
        }
      })
  }
