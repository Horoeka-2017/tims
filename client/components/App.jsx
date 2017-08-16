import React from 'react'

import ImageUpload from './ImageUpload'
import MessageList from './MessageList'
import NewMessage from './NewMessage'
import LoadMessages from './LoadMessages'

export default class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <ImageUpload/>
        <LoadMessages/>
        <MessageList/>
        <NewMessage />
      </div>
    )
  }
}
