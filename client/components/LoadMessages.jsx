import React from 'react'
import {connect} from 'react-redux'
import {fetchMessages} from '../actions'

function LoadMessages ({dispatch}) {
<<<<<<< HEAD
    return ( <button onClick={(e) => dispatch(fetchMessages())}>
             Fetch Messages
             </button>
           )
=======
  return (
    <button onClick={() => dispatch(fetchMessages())}>Fetch Messages</button>
  )
>>>>>>> faaab6205aeda976ac12a8bec2c8bb833973bab7
}
export default connect()(LoadMessages)
