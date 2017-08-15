import React from 'react'
import Person from './Person'

export default function Message (props) {
  return (
    <div>
      <Person person={props.message.sender}/>
      <img src={props.message.imageUrl}/>
      <Person person={props.message.receiver}/>
    </div>
  )
}
