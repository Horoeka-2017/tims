import React from 'react'
import Person from './Person'
import Message from './Message'

export default const MessageList = (props) => {
  return (
    props.data.map(messageData => {
        <Message message={messageData}/>
    })
  )
}
