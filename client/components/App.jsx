import React from 'react'
import MessageList from './MessageList'
import {Route} from 'react-router-dom'
import LoadMessages from './LoadMessages'

export default class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <LoadMessages />
        <Route exact path ='/' component={MessageList}/>
        <Link to='/new'> Create New Message </Link>
      </div>
    )
  }
}
