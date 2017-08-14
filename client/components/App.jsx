import React from 'react'
import MessageList from './MessageList'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    //TODO state and logic stuff
  }
    <div className='app'>
    <MessageList data={this.state.messageData} />
    </div>
}
export default App
