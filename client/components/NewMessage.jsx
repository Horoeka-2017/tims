import React from 'react'

import people from '../people.js'

class NewMessage extends React.Component {
  constructor () {
    super()
    this.state = {
      sender: null,
      recipient: null,
      senderPhoto: null,
      recipientPhoto: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleGetPhoto = this.handleGetPhoto.bind(this)
  }
  handleGetPhoto (action, name) {
    if (action === 'sender') {
      people.map((person) => {
        if (person.name === name) {
          this.setState({senderPhoto: person.photo})
        }
      })
    } else if (action === 'recipient') {
      people.map((person) => {
        if (person.name === name) {
          this.setState({recipientPhoto: person.photo})
        }
      })
    }
  }

  handleChange (e) {
    const target = e.target
    const name = target.value
    const action = target.name

    this.setState({
      [action]: name
    })
    this.handleGetPhoto(action, name)
  }
  render () {
    return (
      <div>
        <form>
              <div>
                <select name="sender" onChange={this.handleChange}>
                  {people.map((person) => {
                    return (
                      <option key={person.id} value={person.name} >{person.name}</option>
                    )
                  })}
                </select>
                <select name="recipient" onChange={this.handleChange}>
                    return (
                  {people.map((person) => {
                    return (
                    <option key={person.id} value={person.name}>{person.name}</option>
                    )
                  })}
                </select>
              </div>
          <label>
            Image URL:
          <input type="text" name="imageUrl" onChange={this.handleChange}/>
          </label>
        </form>
        <div>
          <img src={this.state.senderPhoto}/>
          <img name="message" />
          <img src={this.state.recipientPhoto}/>
        </div>
      </div>
    )
  }
}

export default NewMessage
