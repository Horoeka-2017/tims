import React from 'react'

import people from '../people.js'

const styles = {
  borderRadius: '150px',
  background: 'white',
  width: '300px',
  height: '300px'
}

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
                <option value="sender">Sender</option>
                  {people.map((person) => {
                    return (
                      <option key={person.id} value={person.name}>{person.name}</option>
                    )
                  })}
                </select>
                <select name="recipient" onChange={this.handleChange}>
                <option value="recipient">Recipient</option>
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
          <input type="text" name="message" onChange={this.handleChange}/>
          </label>
        </form>
        <div>
          <img style={styles} src={this.state.senderPhoto}/>
          <img style={styles} src={this.state.message}/>
          <img style={styles} src={this.state.recipientPhoto}/>
        </div>
      </div>
    )
  }
}

export default NewMessage
