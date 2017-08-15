import React from 'react'

import people from '../people.js'

class NewMessage extends React.Component {
  constructor () {
    super()
    this.state = {
      sender: null,
      recipient: null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
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
          <input type="text" name="image-url" onChange={this.handleChange}/>
          </label>
        </form>
      </div>
    )
  }
}

export default NewMessage
