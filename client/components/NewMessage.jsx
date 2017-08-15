import React from 'react'

class NewMessage extends React.Components {
  constructor (props) {
    super(props)
    this.state = {
      sender: null,
      recipient: null,
      imageUrl: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  render () {
    return (
      <div>
        <form>
          <select onChange={this.handleChange}>
            <option value={sender}>{sender}</option>
          </select>
          <select onChange={this.handleChange>
            <option value={recipient}>{recipient}</option>
          </select>
          <input type='text' name='image-url'/>
        </form>
        <button>Submit</button>
      </div>
    )
  }
}

export default NewMessage
