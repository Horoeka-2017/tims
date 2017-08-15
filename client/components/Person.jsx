import React from 'react'

export default function Person (props) {
  return (
      <div className='person-container'>
    <img className='person' src={props.person.photo} alt={props.person.name}/>
    {props.person.name}
      </div>
  )
}
