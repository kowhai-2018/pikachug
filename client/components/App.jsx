import React, { Component } from 'react'
import Logo from './Logo'
import TaskList from './TaskList'
import AddButton from './AddButton'

export default class App extends Component {
  state = {
    tasks: [{
      id: 1,
      task: 'Drink a bottle of beer',
      checked: false
    },
    {
      id: 2,
      task: 'Get the BBQ roaring',
      checked: false
    },
    {
      id: 3,
      task: 'Go to the pub!',
      checked: false
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

  confirmTask (state) {
    // const tasks = [...this.state.tasks]
    // const newState = tasks.find(task => task.id === state.id)

    this.setState(prevState => {
      const tasks = [...prevState.tasks]
      const taskIndex = tasks.findIndex(task => task.id === state.id)

      tasks[taskIndex] = { ...tasks[taskIndex], ...state }

      return { tasks }
    })
    console.log(this.state)
  }


  render () {
    return (
      <div className="container">
      <center>
      <Logo />
        <TaskList confirmTask={this.confirmTask} taskList={this.state.tasks} removeTask={this.removeTask} checked={this.state.checked} />
        <AddButton add={this.addNewTask} />
      </center>
      </div>
    )
  }
}
