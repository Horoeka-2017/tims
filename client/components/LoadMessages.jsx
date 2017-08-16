import React from 'react'
import {connect} from 'react-redux'
import {fetchMessages} from '../actions'

function LoadMessages ({dispatch}) {
  return (
    <button onClick={() => dispatch(fetchMessages())}>Fetch Messages</button>
  )
}
export default connect()(LoadMessages)
