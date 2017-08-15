import React from 'react'

import MessageList from './MessageList'
import NewMessage from './NewMessage'
import LoadMessages from './LoadMessages'

export default class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <LoadMessages/>
        <MessageList/>
        <NewMessage />
      </div>
    )
  }
}
