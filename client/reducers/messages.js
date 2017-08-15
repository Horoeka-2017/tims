import {RECEIVE_MESSAGES} from '../actions'

function messages (state = [], action) {
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return action.messages
    default:
      return state
  }
}

export default messages
