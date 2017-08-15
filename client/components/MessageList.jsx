import React from 'react'
import Message from './Message'
import {connect} from 'react-redux'

export default function MessageListx (props) {
  return (
    props.data.map(messageData => {
      return <Message message={messageData}/>
    })
  )
}

// new function with react


function MessageList ({messages}) {
  return (
    <div>
      {messages.map((message, i) => {
        return (<Message
                    key = {i}
                    message={message}
                    />
               )

      })}
  )
}
