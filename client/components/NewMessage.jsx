import React from 'react'
import {Route, Link} from 'react-router-dom'
import people from '../people.js'

const styles = {
  borderRadius: '50%',
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
      recipientPhoto: null,
      message: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleGetPhoto = this.handleGetPhoto.bind(this)
  }

  handleGetPhoto (action, id) {
    const person = people.find((p) => p.id === Number(id))

    if (action === 'sender') {
      this.setState({senderPhoto: person.photo})
    } else if (action === 'recipient') {
      this.setState({recipientPhoto: person.photo})
    }
  }

  handleChange (e) {
    const {name: action, value: id} = e.target

    this.setState({
      [action]: id
    })
    this.handleGetPhoto(action, id)
  }
  // there needs to be another function for an api call to put the data from the form into the databse
  render () {
    return (
      <div>
        <form action="arglebargle" id="messageForm">
          <input type="submit"/>
        </form>
        <div>
          <select name="sender" onChange={this.handleChange} form="messageForm" required>
            <option value="">Sender</option>
            {people.map((person) => {
              return <option key={person.id} value={person.id}>{person.name}</option>
            })}
          </select>
          <select name="recipient" onChange={this.handleChange} required>
            <option value="recipient">Recipient</option>
            {people.map((person) => {
              return <option key={person.id} value={person.id}>{person.name}</option>
            })}
          </select>
        </div>
        <label>
          Image URL:
          <input type="text" name="message" onChange={this.handleChange}/>
        </label>
        <div>
          <img style={styles} src={this.state.senderPhoto}/>
          <img style={styles} src={this.state.message}/>
          <img style={styles} src={this.state.recipientPhoto}/>
        </div>
        <Link to='/'>
          <button>Back to MessageWall</button>
        </Link>
      </div>
    )
  }
}

export default NewMessage
