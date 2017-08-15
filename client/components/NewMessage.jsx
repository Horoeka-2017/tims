import React from 'react'

class NewMessage extends React.Component {
  constructor (props) {
    super(props)
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
          <select name="sender" onChange={this.handleChange}>
            <option value="Jane" >Jane</option>
            <option value="Mary" >Mary</option>
            <option value="Felicia" >Felicia</option>
            <option value="Poppy" >Poppy</option>
          </select>
          <select name="recipient" onChange={this.handleChange}>
            <option value="Jane" >Jane</option>
            <option value="Mary" >Mary</option>
            <option value="Felicia" >Felicia</option>
            <option value="Poppy" >Poppy</option>
          </select>
        </form>
      </div>
    )
  }
}

export default NewMessage
