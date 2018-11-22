import React, { Component } from 'react'
import Logo from './Logo'
import TaskList from './TaskList'
import AddButton from './AddButton'

export default class App extends Component {
  state = {
    task = [{
      id: 1,
      task: 'Drink a bottle of beer'
    },
    {
      id: 2,
      task: 'Get the BBQ roaring'
    }]
  }
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
