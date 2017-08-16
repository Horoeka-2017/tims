import React from 'react'
<<<<<<< HEAD
import { addMessage } from '../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import people from '../people.js'
=======
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {getPeople, addMessage} from '../actions'
>>>>>>> 511493a161b086eed39ed407d70771b881ff4cc3

class NewMessage extends React.Component {
  constructor() {
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

  componentDidMount() {
    this.props.getPeople()
  }

  handleGetPhoto(action, id) {
    const person = this.props.people.find((p) => p.id === Number(id))

    if (action === 'sender') {
      this.setState({ senderPhoto: person.photo, sender: person.name, senderId: person.id })
    } else if (action === 'recipient') {
      this.setState({ recipientPhoto: person.photo, sender: person.name, recipientId: person.id })
    }
  }

  handleChange(e) {
    const { name: action, value: id } = e.target

    this.setState({
      [action]: id
    })
    this.handleGetPhoto(action, id)
  }

  handleAddMessage(e) {
    const message = {
      senderId: this.state.senderId,
      recipientId: this.state.recipientId,
      message: this.state.message
    }
    this.props.addMessage(message, () => {
      this.props.history.push('/')
    })
  }

  render() {
    return (
      <div className="newMessageStyle">
        <h1>New Image Message</h1>
        <div className="select-list">
          <select className="sender" name="sender" onChange={this.handleChange}>
            <option value="sender">Sender</option>
            {this.props.people.map((person) => {
              return <option key={person.id} value={person.id}>{person.name}</option>
            })}
          </select>
          <select className="recipient" name="recipient" onChange={this.handleChange}>
            <option value="recipient">Recipient</option>
            {this.props.people.map((person) => {
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

NewMessage.propTypes = {
  getPeople: React.PropTypes.func,
  people: React.PropTypes.array
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPeople: () => dispatch(getPeople()),
    addMessage: (message, cb) => {
      dispatch(addMessage(message, cb))
    }

  }
}

function mapStateToProps(state) {
  return {
    people: state.people
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewMessage)
