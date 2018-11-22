import React, { Component } from 'react'
import Logo from './Logo'
import TaskList from './TaskList'
import AddButton from './AddButton'

export default class App extends Component {
  render () {
    return (
      <div>
        <Logo />
        <TaskList />
        <AddButton />
      </div>
    )
  }
}
