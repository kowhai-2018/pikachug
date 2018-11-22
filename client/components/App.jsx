import React, { Component } from 'react'
import Logo from './Logo'
import TaskList from './TaskList'
import AddButton from './AddButton'

export default class App extends Component {
  state = {
    task: [{
      id: 1,
      task: 'Drink a bottle of beer'
    },
    {
      id: 2,
      task: 'Get the BBQ roaring'
    },
    {
      id: 3,
      task: 'Go to the pub!'
    }]
  }

  addNewTask = task => {
    taskId = this.state.task.length

  }


  render () {
    return (
      <div>
        <Logo />
        <TaskList taskList={this.state.task}/>
        <AddButton />
      </div>
    )
  }
}
