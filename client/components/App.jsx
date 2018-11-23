import React, { Component } from 'react'
import Logo from './Logo'
import TaskList from './TaskList'
import AddButton from './AddButton'

export default class App extends Component {
  state = {
    tasks: [{
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
    task.id = this.state.tasks.length+1
    let tasks = [...this.state.tasks, task]
    this.setState({
      tasks: tasks
    })
  }

  removeTask = id => {
    const tasks = [...this.state.tasks]
    const newState = tasks.filter(task => task.id !== id)    
    this.setState({ 
      tasks: newState 
    })
  }

  render () {
    return (
      <div>
        <Logo />
        <TaskList taskList={this.state.tasks} removeTask={this.removeTask} />
        <AddButton add={this.addNewTask} />
      </div>
    )
  }
}
