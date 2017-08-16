import React from 'react'
import Person from './Person'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {requestDeleteMessage} from '../actions'

class Message extends React.Component {
  constructor (props) {
    super(props)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick (e) {
    this.props.requestDeleteMessage(this.props.message.id)
  }

  render () {
    return (
    <div>
      <Person person={this.props.message.sender}/>
      <img src={this.props.message.imageUrl}/>
      <Person person={this.props.message.recipient}/>
      <button value='delete' onClick={this.handleOnClick}>x</button>
    </div>
    )
  }
}
Message.propTypes = {
  message: PropTypes.object.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestDeleteMessage: (id) => {
      dispatch(requestDeleteMessage(id))
    }
  }
}

export default connect(null, mapDispatchToProps)(Message)
