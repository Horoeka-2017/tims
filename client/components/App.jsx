import React from 'react'

import MessageList from './MessageList'
import {Route, Link} from 'react-router-dom'
import NewMessage from './NewMessage'
import LoadMessages from './LoadMessages'
import WaitIndicator from './WaitIndicator'
import ErrorMessage from './ErrorMessage'

export default class App extends React.Component {
  render () {
    return (
      <div className='app'>
<<<<<<< HEAD
        <ErrorMessage />
        <LoadMessages/>
        <WaitIndicator />
        <MessageList/>
        <NewMessage />
=======
        <Route exact path ='/' component={MessageList}/>
        <Route path='/new' component={NewMessage} />
        <Link to='/new'> Create New Message </Link>
        <LoadMessages/>
>>>>>>> faaab6205aeda976ac12a8bec2c8bb833973bab7
      </div>
    )
  }
}
