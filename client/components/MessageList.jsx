import React from 'react'
import Message from './Message'

export default function MessageList (props) {
  return (
    props.messages.map(message => {
      return <Message message={message}/>
    })
  )
}
