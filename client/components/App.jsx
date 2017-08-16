import React from 'react'

import MessageList from './MessageList'
import {Route} from 'react-router-dom'
import NewMessage from './NewMessage'

export default class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <Route exact path ='/' component={MessageList}/>
        <Route path='/new' component={NewMessage} />
      </div>
    )
  }
