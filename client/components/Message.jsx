import React from 'react'
import Person from './Person'
import PropTypes from 'prop-types'

class Message extends React.Component {
  constructor (props) {
    super(props)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick (e) {
  }

  render () {
    return (
    <div>
      <Person person={props.message.sender}/>
      <img src={props.message.imageUrl}/>
      <Person person={props.message.recipient}/>
      <button value='delete' onClick={this.handleOnClick}>x</button>
    </div>
    )
  }
}
Message.propTypes = {
  message: PropTypes.object.isRequired
}

export default Message
