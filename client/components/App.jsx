import React from 'react'
import MessageList from './MessageList'
import Route from 'react-router-dom'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    // TODO state and logic stuff
  }
  render () {
    return (
      <div className='app'>
        <Route exact path ='/' component={MessageList} messages={this.state.messageData} />
      </div>
    )
  }
}

