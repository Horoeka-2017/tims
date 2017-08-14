import React from 'react'
import Person from './Person'

export default const Message = (props) => {
  return (
    <div>
      <Person imageData={props.message.sender}/>
      <img src={props.message.src}/>
      <Person imageData={props.message.receiver}/>
    </div>
  )
}
