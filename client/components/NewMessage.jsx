import React from 'react'
import {Link} from 'react-router-dom'
import {getPeople} from '../actions'
import {connect} from 'react-redux'

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

  componentDidMount () {
    this.props.getPeople()
  }

  handleGetPhoto (action, id) {
    const person = this.props.people.find((p) => p.id === Number(id))

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
  render () {
    return (
      <div>
        <div>
          <select name="sender" onChange={this.handleChange}>
            <option value="sender">Sender</option>
              {this.props.people.map((person) => {
                return <option key={person.id} value={person.id}>{person.name}</option>
              })}
          </select>
          <select name="recipient" onChange={this.handleChange}>
            <option value="recipient">Recipient</option>
              {this.props.people.map((person) => {
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

NewMessage.propTypes = {
  getPeople: React.PropTypes.func,
  people: React.PropTypes.array
}

function matchDispatchToProps (dispatch) {
  return {
    getPeople: () => dispatch(getPeople())
  }
}

function mapStateToProps (state) {
  return {
    people: state.people
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(NewMessage)
