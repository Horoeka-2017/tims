import React from 'react'

import MessageList from './MessageList'
import NewMessage from './NewMessage'
import LoadMessages from './LoadMessages'
import WaitIndicator from './WaitIndicator'
import ErrorMessage from './ErrorMessage'

export default class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <ErrorMessage />
        <LoadMessages/>
        <WaitIndicator />
        <MessageList/>
        <NewMessage />
      </div>
    )
  }
}
