import React from 'react'

const styles = {
  borderRadius: "150px",
  background: "white",
  width: "300px",
  height: "300px"
}

export default function Person (props) {
  return (
    <img style={styles} src={props.person.photo} alt={props.person.name}/>
  )
}
