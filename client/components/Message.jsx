import React from 'react'
import Person from './Person'

export default function Message (props) {
  return (
    <div>
      <Person imageData={props.message.sender}/>
      <img src={props.message.imageUrl}/>
      <Person imageData={props.message.receiver}/>
    </div>
  )
}
