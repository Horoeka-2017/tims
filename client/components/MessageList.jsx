import React from 'react'
import PropTypes from 'prop-types'

import Message from './Message'
import { connect } from 'react-redux'

function MessageList({ messages }) {
  return (
    <div>
      hi
      {messages.map((message, i) => {
        return <Message key={i} message={message} />
      })
      }
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
