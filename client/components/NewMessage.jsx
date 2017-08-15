import React from 'react'

import people from '../people.js'

class NewMessage extends React.Component {
  constructor () {
    super()
    this.state = {
      sender: null,
      recipient: null,
      senderPhoto: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleGetPhoto = this.handleGetPhoto.bind(this)
  }
  handleGetPhoto (sender) {
    const photo = people.map((person) => {
      if (person.name === sender) {
        this.setState({senderPhoto: person.photo})
      }
    })
  }

  handleChange (e) {
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
    this.handleGetPhoto(value)
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
          <img name="recipientImage"/>
        </div>
      </div>
    )
  }
}

export default NewMessage
