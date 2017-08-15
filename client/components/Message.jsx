import React from 'react'
import Person from './Person'
import PropTypes from 'prop-types'



export default function Message (props) {
  return (
    <div>
      <Person person={props.message.sender}/>
      <img src={props.message.imageUrl}/>
      <Person person={props.message.recipient}/>
    </div>
  )
}

Message.propTypes = {
  message: PropTypes.object.isRequired
}
