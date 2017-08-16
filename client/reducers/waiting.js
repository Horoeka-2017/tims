import {
  SHOW_ERROR,
  REQUEST_MESSAGES,
  RECEIVE_MESSAGES} from '../actions'

const waiting = (state = false, action) => {
  switch (action.type) {
    case REQUEST_MESSAGES:
      return true

    case RECEIVE_MESSAGES:
      return false

    case SHOW_ERROR:
      return false

    default:
      return state
  }
}

export default waiting
