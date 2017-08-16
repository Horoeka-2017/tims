import React from 'react'
import {connect} from 'react-redux'
import {fetchMessages} from '../actions'

function LoadMessages ({dispatch}) {
    return ( <button onClick={(e) => dispatch(fetchMessages())}>
             Fetch Messages
             </button>
           )
}
export default connect()(LoadMessages)
