import React from 'react'

import ImageUpload from './ImageUpload'
import MessageList from './MessageList'
import {Route, Link} from 'react-router-dom'
import NewMessage from './NewMessage'
import LoadMessages from './LoadMessages'

export default class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <Route exact path ='/' component={MessageList}/>
        <Route path='/new' component={NewMessage} />
        <Link to='/new'> Create New Message </Link>
        <LoadMessages/>
      </div>
    )
  }
}
