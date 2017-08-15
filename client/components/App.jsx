import React from 'react'
// import MessageList from './MessageList'
import NewMessage from './NewMessage'
export default class App extends React.Component {
  constructor (props) {
    super(props)
    // TODO state and logic stuff
  }
  render () {
    return (
      <div className='app'>
        {/* <MessageList messages={this.state.messageData} /> */}
        <NewMessage />
      </div>
    )
  }
}
