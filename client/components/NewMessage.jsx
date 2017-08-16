import React from 'react'
import { addMessage } from '../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import people from '../people.js'

class NewMessage extends React.Component {
  constructor () {
    super()
    this.state = {
      sender: null,
      senderId: null,
      recipient: null,
      recipientId: null,
      senderPhoto: null,
      recipientPhoto: null,
      message: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleGetPhoto = this.handleGetPhoto.bind(this)
    this.handleAddMessage = this.handleAddMessage.bind(this)
  }

  handleGetPhoto (action, id) {
    const person = people.find((p) => p.id === Number(id))

    if (action === 'sender') {
      this.setState({ senderPhoto: person.photo, sender: person.name, senderId: person.id })
    } else if (action === 'recipient') {
      this.setState({ recipientPhoto: person.photo, sender: person.name, recipientId: person.id })
    }
  }

  handleChange (e) {
    const { name: action, value: id } = e.target

    this.setState({
      [action]: id
    })
    this.handleGetPhoto(action, id)
  }

  handleAddMessage (e) {
    const message = {
      senderId: this.state.senderId,
      recipientId: this.state.recipientId,
      message: this.state.message
    }
    this.props.addMessage(message, () => {
      this.props.history.push('/')
    })
  }

  render () {
    return (
      <div className="newMessageStyle">
        <h1>New Image Message</h1>
        <div className="select-list">
          <select className="sender" name="sender" onChange={this.handleChange}>
            <option value="sender">Sender</option>
            {people.map((person) => {
              return <option key={person.id} value={person.id}>{person.name}</option>
            })}
          </select>
          <select className="recipient" name="recipient" onChange={this.handleChange}>
            <option value="recipient">Recipient</option>
            {people.map((person) => {
              return <option key={person.id} value={person.id}>{person.name}</option>
            })}
          </select>
        </div>

        <div className="input-image url">
          <label>
            <div>Image URL:</div>
            <input className="url" type="text" name="message" onChange={this.handleChange} />
          </label>
        </div>

        <div>
          <img className="person-photo" src={this.state.senderPhoto} />
          <img className="message-image" src={this.state.message} />
          <img className="person-photo" src={this.state.recipientPhoto} />
        </div>
        <div className="btn">
          <Link to='/'>
            <button className="back-button">Back to MessageWall</button>
          </Link>
          <button className="add-message" value="submit" onClick={this.handleAddMessage}>Add Message</button>

        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (message, cb) => {
      dispatch(addMessage(message, cb))
    }
  }
}

export default connect(null, mapDispatchToProps)(NewMessage)
