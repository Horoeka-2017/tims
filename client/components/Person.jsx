import React from 'react'

let styles = {
  borderRadius: "150px",
  background: "white",
  width: "300px",
  height: "300px"
}

export default const Person = (props) => {
  return (
    <img style={styles} src={props.url} alt={props.name}/>
  )
