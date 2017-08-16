import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import LoadMesssages from './LoadMessages'
import Message from './Message'
import { connect } from 'react-redux'

function MessageList ({ messages }) {
  return (
    <div>
      <div>
        {messages.map((message, i) => {
          return <Message key={i} message={message} />
          })
        }
      </div>
      <Link to='/new'> Create New Message </Link>
    </div>
  )
}

MessageList.propTypes = {
  messages: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps)(MessageList)
