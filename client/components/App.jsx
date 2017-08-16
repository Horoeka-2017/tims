import React from 'react'

import MessageList from './MessageList'
import {Route} from 'react-router-dom'
import NewMessage from './NewMessage'
import LoadMessages from './LoadMessages'
import WaitIndicator from './WaitIndicator'
import ErrorMessage from './ErrorMessage'

export default class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <WaitIndicator />
        <ErrorMessage />
        <Route exact path ='/' component={MessageList}/>
        <Route path='/new' component={NewMessage} />
      </div>
    )
  }
}

// when you click the button it gets the sender info, recipient info, message itself, and posts that to the db
