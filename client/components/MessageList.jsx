import React from 'react'
import Message from './Message'

export default function MessageList (props) {
  return (
    props.data.map(messageData => {
      return <Message message={messageData}/>
    })
  )
}
