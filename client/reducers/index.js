import {combineReducers} from 'redux'

import errorMessage from './error-message'
import waiting from './waiting'
import messages from './messages'

export default combineReducers({
  errorMessage,
  waiting,
  messages
})
