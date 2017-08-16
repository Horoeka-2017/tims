import React from 'react'

import people from '../people.js'

class NewMessage extends React.Component {
  constructor () {
    super()
    this.state = {
      sender: null,
      recipient: null,
      senderPhoto: null,
      recipientPhoto: null,
      message: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleGetPhoto = this.handleGetPhoto.bind(this)
  }

  handleGetPhoto (action, id) {
    const person = people.find((p) => p.id === Number(id))

    if (action === 'sender') {
      this.setState({ senderPhoto: person.photo })
    } else if (action === 'recipient') {
      this.setState({ recipientPhoto: person.photo })
    }
  }

  handleChange (e) {
    const { name: action, value: id } = e.target

    this.setState({
      [action]: id
    })
    this.handleGetPhoto(action, id)
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

        <div className="input-image">
          <label>
            <div>Image URL:</div>
            <input type="text" name="message" onChange={this.handleChange} />
          </label>
        </div>

        <div>
          <img className="person-photo" src={this.state.senderPhoto} />
          <img className="message-image" src={this.state.message} />
          <img className="person-photo" src={this.state.recipientPhoto} />
        </div>
      </div>
    )
  }
}

export default NewMessage
